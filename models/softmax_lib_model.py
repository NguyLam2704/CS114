# softmax_lib_model.py

import pickle
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

class SoftmaxLibModel:
    def __init__(self, max_iter=1000, random_state=42):
       self.model = LogisticRegression(
            solver="lbfgs",  # tương thích với softmax
            max_iter=max_iter,
            random_state=random_state
        )

    def train(self, X, y, test_size=0.2):
        self.X_train, self.X_test, self.y_train, self.y_test = train_test_split(
            X, y, test_size=test_size, random_state=42
        )
        self.model.fit(self.X_train, self.y_train)
        print("Đã huấn luyện mô hình Softmax Regression với library.")

    def evaluate(self):
        y_pred = self.model.predict(self.X_test)
        acc = accuracy_score(self.y_test, y_pred)
        print(f"Accuracy trên tập test: {acc * 100:.2f}%")
        return acc

    def predict(self, X_new):
        return self.model.predict(X_new)
