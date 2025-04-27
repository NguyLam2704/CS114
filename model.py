# model.py

import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix
import joblib

def load_data(X_path, y_path):
    X = pd.read_csv(X_path)
    y = pd.read_csv(y_path).squeeze()  # y thường chỉ có 1 cột nên dùng squeeze()
    return X, y

def train_model(X, y):
    # Chia tập train/test
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )

    # Khởi tạo model Logistic Regression với ElasticNet penalty
    model = LogisticRegression(
        penalty='elasticnet',
        solver='saga',
        l1_ratio=0.5,
        max_iter=10000,
        random_state=42
    )

    # Grid Search để tìm tham số tốt hơn (tuỳ chọn)
    param_grid = {
        'C': [0.01, 0.1, 1, 10],
        'l1_ratio': [0.2, 0.5, 0.8]
    }

    grid_search = GridSearchCV(model, param_grid, cv=5, scoring='accuracy', n_jobs=-1)
    grid_search.fit(X_train, y_train)

    best_model = grid_search.best_estimator_

    # Dự đoán
    y_pred = best_model.predict(X_test)

    # Đánh giá
    print("=== Classification Report ===")
    print(classification_report(y_test, y_pred))

    print("=== Confusion Matrix ===")
    print(confusion_matrix(y_test, y_pred))

    return best_model

def save_model(model, path='elasticnet_model.pkl'):
    joblib.dump(model, path)

if __name__ == "__main__":
    # Load dữ liệu đã xử lý
    X, y = load_data("X_final_scaled.csv", "y_processed.csv")

    # Train model
    model = train_model(X, y)

    # Lưu model
    save_model(model)

    print("\n✅ Model đã train và lưu thành công!")