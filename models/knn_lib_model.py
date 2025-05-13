from sklearn.metrics import classification_report, confusion_matrix, precision_score, recall_score, f1_score
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
class KnnLibModel:
  def __init__(self, n_neighbors = 5, weights = 'uniform', p = 2 ):
        self.n_neighbors = n_neighbors
        self.weights = weights
        self.p = p
        self.model = KNeighborsClassifier(n_neighbors=self.n_neighbors, p=self.p)

  def train(self, X, y):
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)
        self.model.fit(X_train, y_train)
        y_pred = self.model.predict(X_test)
        print("=== KNN Classification Report ===")
        print(classification_report(y_test, y_pred))
        print("=== KNN Confusion Matrix ===")
        print(confusion_matrix(y_test, y_pred))

            # Precision, Recall, F1-score tổng thể (macro, micro, weighted đều có thể)
        precision = precision_score(y_test, y_pred, average='weighted')
        recall = recall_score(y_test, y_pred, average='weighted')
        f1 = f1_score(y_test, y_pred, average='weighted')

        print(f"Weighted Precision: {precision:.4f}")
        print(f"Weighted Recall:    {recall:.4f}")
        print(f"Weighted F1-score:  {f1:.4f}")
        return self.model
        
  def predict(self, X_new):
        return self.model.predict(X_new)

# knn = KNN_model(n_neighbors=11, p=2)
# knn.train(X, y)  # Huấn luyện mô hình