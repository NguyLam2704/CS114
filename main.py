# main.py

from preprocessing import preprocess_data
from model import (
    train_model,
    save_model,
    train_model_softmax,
    train_model_softmax_lib,
    train_model_random_forest,
)
from balancing import split_and_smote
import pandas as pd

if __name__ == "__main__":
    # --- Bước 1: Preprocessing dữ liệu ---
    df = pd.read_csv(
        "C:/Project/ML/doan/CS114/kidney_disease_dataset.csv"
    )  # Đọc file dữ liệu gốc có sẵn trong folder

    print("\n🔵 Đang thực hiện tiền xử lý dữ liệu...")
    X_final_scaled, y_processed = preprocess_data(df)

    # Lưu dữ liệu đã xử lý (tùy chọn)
    X_final_scaled.to_csv("X_final_scaled.csv", index=False)
    y_processed.to_csv("y_processed.csv", index=False)

    print("\n✅ Tiền xử lý hoàn tất. Dữ liệu đã sẵn sàng để huấn luyện!")

    # --- Cân bằng dữ liêu bằng SMOTE ---
    X_train_balanced, X_test, y_train_balanced, y_test = split_and_smote(
        X_final_scaled, y_processed
    )

    # --- Bước 2: Train model ---
    print("\n🔵 Đang train model với ElasticNet Logistic Regression...")
    model = train_model(X_train_balanced, X_test, y_train_balanced, y_test)

    print("\n🔵 Đang train model với Softmax Regression...")
    model_softmax = train_model_softmax(
        X_train_balanced, X_test, y_train_balanced, y_test
    )

    print("\n🔵 Đang train model với Softmax Regression (thư viện)...")
    model_softmax_lib = train_model_softmax_lib(
        X_train_balanced, X_test, y_train_balanced, y_test
    )

    print("\n🔵 Đang train model với Random Forest ...")
    model_random_forest = train_model_random_forest(
        X_train_balanced, X_test, y_train_balanced, y_test
    )

    # --- Bước 3: Lưu model ---
    save_model(model, "saved_models/elasticnet_model.pkl")
    save_model(model_softmax, "saved_models/softmax_model.pkl")
    save_model(model_softmax_lib, "saved_models/softmax_lib_model.pkl")
    save_model(model_random_forest, "saved_model/randomforest_model.pkl")

    print("\n🎯 Quá trình train và lưu model đã hoàn thành!")
