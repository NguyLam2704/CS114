# model.py

import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix
import joblib
from models.softmax_model import SoftmaxRegression
from sklearn.model_selection import train_test_split
import os
from models.softmax_lib_model import SoftmaxLibModel
from models.knn_lib_model import KnnLibModel
from models.knn_model import KnnModel
from models.randomforest_model import *
from sklearn.ensemble import RandomForestClassifier
from models.knn_lib_model import KnnLibModel
from models.knn_model import KnnModel


def load_data(X_path, y_path):
    X = pd.read_csv(X_path)
    y = pd.read_csv(y_path).squeeze()  # y thường chỉ có 1 cột nên dùng squeeze()
    return X, y


def train_model_elasticnet(X, y):
    # Chia tập train/test
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )

    # Khởi tạo model Logistic Regression với ElasticNet penalty
    model = LogisticRegression(
        penalty="elasticnet",
        solver="saga",
        l1_ratio=0.5,
        max_iter=10000,
        random_state=42,
    )

    # Grid Search để tìm tham số tốt hơn (tuỳ chọn)
    param_grid = {"C": [0.01, 0.1, 1, 10], "l1_ratio": [0.2, 0.5, 0.8]}

    grid_search = GridSearchCV(model, param_grid, cv=5, scoring="accuracy", n_jobs=-1)
    grid_search.fit(X_train, y_train)

    best_model = grid_search.best_estimator_

    # Dự đoán
    y_pred = best_model.predict(X_test)

    # Đánh giá
    print("=== Classification Report ===")
    print(classification_report(y_test, y_pred, zero_division=0))

    print("=== Confusion Matrix ===")
    print(confusion_matrix(y_test, y_pred))

    return best_model


def save_model(model, path):
    # Tạo thư mục nếu chưa tồn tại
    os.makedirs(os.path.dirname(path), exist_ok=True)

    # Lưu model vào file
    joblib.dump(model, path)


def train_model_softmax(X, y):
    # Tách dữ liệu
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )

    # Huấn luyện
    model = SoftmaxRegression(learning_rate=0.1, epochs=1000)
    model.fit(X_train.to_numpy(), y_train.to_numpy())

    # Dự đoán
    y_pred = model.predict(X_test.to_numpy())

    # Đánh giá
    print("\n=== Classification Report ===")
    print(classification_report(y_test, y_pred, zero_division=0))

    print("\n=== Confusion Matrix ===")
    print(confusion_matrix(y_test, y_pred))

    return model


def train_model_softmax_lib(X, y):
    # Tách dữ liệu
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )

    # Huấn luyện
    model = SoftmaxLibModel(max_iter=1000)
    model.train(X_train, y_train)

    # Dự đoán
    y_pred = model.predict(X_test)

    # Đánh giá
    print("\n=== Classification Report ===")
    print(classification_report(y_test, y_pred, zero_division=0))

    print("\n=== Confusion Matrix ===")
    print(confusion_matrix(y_test, y_pred))

    return model


def train_model_knn_lib(X, y):
    # Tách dữ liệu
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )

    # Huấn luyện
    model = KnnLibModel(n_neighbors=5, weights="uniform", p=2)
    model.train(X_train, y_train)

    # Dự đoán
    y_pred = model.predict(X_test)

    # Đánh giá
    print("\n=== Classification Report ===")
    print(classification_report(y_test, y_pred, zero_division=0))

    print("\n=== Confusion Matrix ===")
    print(confusion_matrix(y_test, y_pred))

    return model


def train_model_knn(X, y):

    X =X.values
    y = y.values
    # Tách dữ liệu
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    # Huấn luyện
    model = KnnModel(k=5)
    model.fit(X_train, y_train)

    # Dự đoán
    y_pred = model.predict(X_test)
    # Đánh giá
    print("\n=== Classification Report ===")
    print(classification_report(y_test, y_pred, zero_division=0))
    print("\n=== Confusion Matrix ===")
    print(confusion_matrix(y_test, y_pred))

    return model


def train_model_lib_random_forest(X, y):

    # Tách dữ liệu
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, stratify=y, random_state=42
    )

    # Huấn luyện mô hình
    model = RandomForestClassifier()
    model.fit(X_train, y_train)

    # Dự đoán
    y_pred = model.predict(X_test)

    # Đánh giá
    print("\n=== Classification Report ===")
    print(classification_report(y_test, y_pred, zero_division=0))
    print("\n=== Confusion Matrix ===")
    print(confusion_matrix(y_test, y_pred))

    return model


def train_model_random_forest(X, y):

    # Tách dữ liệu
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, stratify=y, random_state=42
    )

    # Huấn luyện mô hình
    model = RandomForest(n_trees=20, max_depth=10, min_samples_split=10)
    model.fit(X_train, y_train)

    # Dự đoán
    y_pred = model.predict(X_test)

    # Đánh giá mô hình
    print("\n=== Classification Report ===")
    print(classification_report(y_test, y_pred, zero_division=0))
    print("\n=== Confusion Matrix ===")
    print(confusion_matrix(y_test, y_pred))

    return model


if __name__ == "__main__":
    # Load dữ liệu đã xử lý
    X, y = load_data("data/X_final_scaled.csv", "data/y_processed.csv")

    # Train model ElasticNet
    model = train_model_elasticnet(X, y)

    # Train model Softmax
    model_softmax = train_model_softmax(X, y)

    # Train model Softmax với thư viện
    model_softmax_lib = train_model_softmax_lib(X, y)

    # Train model KNN với thư viện
    model_knn_lib = train_model_knn_lib(X, y)

    # Train model KNN
    model_knn = train_model_knn(X, y)

    # Train model Random Forest
    model_randomforest = train_model_random_forest(X, y)

    # Train model Random Forest với thư viện
    model_randomforest_lib = train_model_lib_random_forest(X, y)

    # Lưu model
    save_model(model, "saved_models/elasticnet_model.pkl")
    save_model(model_softmax, "saved_models/softmax_model.pkl")
    save_model(model_softmax_lib, "saved_models/softmax_lib_model.pkl")
    save_model(model_knn, "saved_models/knn_model.pkl")
    save_model(model_knn_lib, "saved_models/knn_lib_model.pkl")
    save_model(model_randomforest, "saved_models/randomforest_model.pkl")
    save_model(model_randomforest_lib, "saved_models/randomforst_lib_model.pkl")
    print("\n✅ Model đã train và lưu thành công!")
