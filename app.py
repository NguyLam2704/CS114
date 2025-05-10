from flask import Flask, jsonify, request
from flask_cors import CORS
from preprocessing import preprocess_data
import pandas as pd 
from sklearn.preprocessing import StandardScaler, PolynomialFeatures
import pickle
import joblib
app = Flask(__name__)
CORS(app)  # Cho phép frontend gọi API


def load():
    model = joblib.load("saved_models/softmax_lib_model.pkl")
    with open("scaler1.pkl", "rb") as f:
        scaler1 = pickle.load(f)

    with open("scaler2.pkl", "rb") as f:
        scaler2 = pickle.load(f)

    with open("poly.pkl", "rb") as f:
        poly = pickle.load(f)

    with open("expected_columns.pkl", "rb") as f:
        expected_columns = pickle.load(f)

    with open("le_target.pkl", "rb") as f:
        le = pickle.load(f)
    
    return model, scaler1, scaler2 , poly, expected_columns, le

@app.route("/api/predict", methods=["POST"])
def predict():
    try: 
        # Load model và scaler
        model, scaler1, scaler2, poly, expected_columns, le = load()
        data = request.get_json()
        required_fields = [
            "coronary_artery_disease",
            "diabetes_mellitus",
            "packed_cell_volume",
            "physical_activity_level",
            "family_history_of_chronic_kidney_disease"
        ]
        
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing field: {field}"}), 400

        X_new = pd.DataFrame(
            [[
                data.get("coronary_artery_disease"), 
                data.get("diabetes_mellitus"), 
                float(data.get("packed_cell_volume")), 
                data.get("physical_activity_level"), 
                data.get("family_history_of_chronic_kidney_disease")
            ]], 
            columns=[
                'Coronary artery disease (yes/no)', 
                'Diabetes mellitus (yes/no)', 
                'Packed cell volume (%)', 
                'Physical activity level_moderate', 
                'Family history of chronic kidney disease'
                ]
            )
        # Tiền xử lý dữ liệu
        # One-Hot Encoding các biến phân loại
        X_encoded = pd.get_dummies(X_new, drop_first=True)

        # Thêm các cột thiếu
        for col in expected_columns:
            if col not in X_encoded.columns:
                X_encoded[col] = 0

        # Loại bỏ cột thừa (nếu người dùng nhập giá trị mới mà training không có)
        X_encoded = X_encoded[[col for col in expected_columns if col in X_encoded.columns]]

        # Sắp xếp lại đúng thứ tự
        X_encoded = X_encoded[expected_columns]
        
        # Chuẩn hóa các đặc trưng
        X_scaled = pd.DataFrame(scaler1.transform(X_encoded), columns=X_encoded.columns)

        # Tạo các đặc trưng tương tác
        X_selected = X_scaled[expected_columns]

        X_interaction = poly.transform(X_selected)
        interaction_columns = poly.get_feature_names_out(input_features=expected_columns)
        X_interaction_df = pd.DataFrame(X_interaction, columns=interaction_columns)
        # Thêm các đặc trưng thống kê
        X_processed = pd.concat([X_selected, X_interaction_df], axis=1)
        X_processed['mean'] = X_selected.mean(axis=1)
        X_processed['std'] = X_selected.std(axis=1)
        X_processed['sum'] = X_selected.sum(axis=1)
        
        # Chuẩn hóa lại toàn bộ tập dữ liệu
        X_final_scaled = pd.DataFrame(scaler2.transform(X_processed), columns=X_processed.columns)

        # Dự đoán
        y_pred = model.predict(X_final_scaled)
        label = le.inverse_transform(y_pred)[0] 
        return jsonify({"prediction": label})
        # return jsonify(response)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
if __name__ == "__main__":
    app.run(debug=True, port=5000)
