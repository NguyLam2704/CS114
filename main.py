# main.py

from preprocessing import preprocess_data
from model import train_model, save_model
import pandas as pd

if __name__ == "__main__":
    # --- Bước 1: Preprocessing dữ liệu ---
    df = pd.read_csv("D:/CS114/kidney_disease_dataset.csv")  # Đọc file dữ liệu gốc có sẵn trong folder

    print("\n🔵 Đang thực hiện tiền xử lý dữ liệu...")
    X_final_scaled, y_processed = preprocess_data(df)

    # Lưu dữ liệu đã xử lý (tùy chọn)
    X_final_scaled.to_csv("X_final_scaled.csv", index=False)
    y_processed.to_csv("y_processed.csv", index=False)

    print("\n✅ Tiền xử lý hoàn tất. Dữ liệu đã sẵn sàng để huấn luyện!")

    # --- Bước 2: Train model ---
    print("\n🔵 Đang train model với ElasticNet Logistic Regression...")
    model = train_model(X_final_scaled, y_processed)

    # --- Bước 3: Lưu model ---
    save_model(model)

    print("\n🎯 Quá trình train và lưu model đã hoàn thành!")
