import numpy as np

class SoftmaxRegression:
    def __init__(self, learning_rate=0.01, epochs=1000):
        self.learning_rate = learning_rate
        self.epochs = epochs
        self.W = None  # Trọng số
        self.b = None  # Bias

    def softmax(self, z):
        exp_z = np.exp(z - np.max(z, axis=1, keepdims=True))  # ổn định số học
        return exp_z / np.sum(exp_z, axis=1, keepdims=True)

    def one_hot(self, y, num_classes):
        m = y.shape[0]
        one_hot_y = np.zeros((m, num_classes))
        one_hot_y[np.arange(m), y] = 1
        return one_hot_y

    def compute_loss(self, Y_true, Y_pred):
        m = Y_true.shape[0]
        loss = -np.sum(Y_true * np.log(Y_pred + 1e-8)) / m
        return loss

    def fit(self, X, y):
        m, n = X.shape
        k = len(np.unique(y))  # số lớp
        self.W = np.zeros((n, k))
        self.b = np.zeros((1, k))

        Y_onehot = self.one_hot(y, k)

        for epoch in range(self.epochs):
            Z = np.dot(X, self.W) + self.b
            Y_hat = self.softmax(Z)

            loss = self.compute_loss(Y_onehot, Y_hat)

            # Gradient
            dW = (1/m) * np.dot(X.T, (Y_hat - Y_onehot))
            db = (1/m) * np.sum(Y_hat - Y_onehot, axis=0, keepdims=True)

            # Cập nhật trọng số
            self.W -= self.learning_rate * dW
            self.b -= self.learning_rate * db

            if epoch % 100 == 0:
                print(f"Epoch {epoch}: Loss = {loss:.4f}")

    def predict(self, X):
        Z = np.dot(X, self.W) + self.b
        Y_hat = self.softmax(Z)
        return np.argmax(Y_hat, axis=1)
