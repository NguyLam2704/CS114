# preprocessing.py

import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder, StandardScaler, PolynomialFeatures
from sklearn.feature_selection import mutual_info_classif

def preprocess_data(df, target_column='Target', top_k_features=5, random_state=42):
    # Bước 1: Loại bỏ các dòng thiếu target
    df = df.dropna(subset=[target_column])
    
    # Bước 2: Encode biến mục tiêu
    le_target = LabelEncoder()
    df[target_column] = le_target.fit_transform(df[target_column])
    
    # Bước 3: Tách features và target
    X = df.drop(columns=[target_column])
    y = df[target_column]
    
    # Bước 4: One-Hot Encoding các biến phân loại
    X_encoded = pd.get_dummies(X, drop_first=True)
    
    # Bước 5: Tính mutual information và chọn top features
    mi_scores = mutual_info_classif(X_encoded, y, random_state=random_state)
    mi_series = pd.Series(mi_scores, index=X_encoded.columns).sort_values(ascending=False)
    
    top_features = mi_series.head(top_k_features).index.tolist()
    
    # Bước 6: Chuẩn hóa các đặc trưng
    scaler = StandardScaler()
    X_scaled = pd.DataFrame(scaler.fit_transform(X_encoded), columns=X_encoded.columns)
    
    # Bước 7: Tạo các đặc trưng tương tác
    X_selected = X_scaled[top_features]
    poly = PolynomialFeatures(degree=2, interaction_only=True, include_bias=False)
    X_interaction = poly.fit_transform(X_selected)
    
    interaction_columns = poly.get_feature_names_out(input_features=top_features)
    X_interaction_df = pd.DataFrame(X_interaction, columns=interaction_columns)
    
    # Bước 8: Thêm các đặc trưng thống kê
    X_processed = pd.concat([X_selected, X_interaction_df], axis=1)
    X_processed['mean'] = X_selected.mean(axis=1)
    X_processed['std'] = X_selected.std(axis=1)
    X_processed['sum'] = X_selected.sum(axis=1)
    
    # Bước 9: Chuẩn hóa lại toàn bộ tập dữ liệu
    X_final_scaled = pd.DataFrame(scaler.fit_transform(X_processed), columns=X_processed.columns)
    
    return X_final_scaled, y

# Nếu muốn test nhanh:
if __name__ == "__main__":
    df = pd.read_csv("your_dataset.csv")  # thay file CSV của bạn vào đây
    X_final, y_final = preprocess_data(df)
    print(X_final.shape)
    print(y_final.shape)
