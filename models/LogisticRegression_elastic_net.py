import numpy as np

class ElasticNetLogisticRegression:
    def __init__(self, lr=0.01, epochs=1000, alpha=0.1, l1_ratio=0.5, verbose=False):
        self.lr = lr
        self.epochs = epochs
        self.alpha = alpha  # tổng độ mạnh regularization
        self.l1_ratio = l1_ratio  # tỷ lệ L1 vs L2
        self.verbose = verbose
        self.weights = None
        self.bias = 0

    def sigmoid(self, z):
        return 1 / (1 + np.exp(-z))

    def compute_loss(self, X, y):
        m = X.shape[0]
        z = np.dot(X, self.weights) + self.bias
        predictions = self.sigmoid(z)

        # Cross entropy loss
        loss = -np.mean(y * np.log(predictions + 1e-15) + (1 - y) * np.log(1 - predictions + 1e-15))

        # Elastic Net regularization
        l1_penalty = np.sum(np.abs(self.weights))
        l2_penalty = np.sum(self.weights ** 2)
        reg = self.alpha * (self.l1_ratio * l1_penalty + (1 - self.l1_ratio) * l2_penalty)

        return loss + reg

    def compute_gradients(self, X, y):
        m = X.shape[0]
        z = np.dot(X, self.weights) + self.bias
        predictions = self.sigmoid(z)
        error = predictions - y

        dw = (1 / m) * np.dot(X.T, error)
        db = (1 / m) * np.sum(error)

        # Thêm regularization gradient
        dw += self.alpha * ((1 - self.l1_ratio) * 2 * self.weights + self.l1_ratio * np.sign(self.weights))

        return dw, db

    def fit(self, X, y):
        n_features = X.shape[1]
        self.weights = np.zeros(n_features)
        self.bias = 0

        for i in range(self.epochs):
            dw, db = self.compute_gradients(X, y)
            self.weights -= self.lr * dw
            self.bias -= self.lr * db

            if self.verbose and i % 100 == 0:
                loss = self.compute_loss(X, y)
                print(f"Epoch {i}, Loss: {loss:.4f}")

    def predict_proba(self, X):
        return self.sigmoid(np.dot(X, self.weights) + self.bias)

    def predict(self, X, threshold=0.5):
        return (self.predict_proba(X) >= threshold).astype(int)

    def score(self, X, y):
        preds = self.predict(X)
        return np.mean(preds == y)
