from scipy import stats
import numpy as np
class KnnModel:
  def __init__(self, k=3, metric='minkowski', p=None):
        self.k = k
        self.metric = metric
        self.p = p
  # Euclidean distance (l2 norm)
  def euclidean(self, v1, v2):
        return np.sqrt(np.sum((v1-v2)**2))

  # Manhattan distance (l1 norm)
  def manhattan(self, v1, v2):
        return np.sum(np.abs(v1-v2))

  # Minkowski distance (lp norm)
  def minkowski(self, v1, v2, p=2):
        return np.sum(np.abs(v1-v2)**p)**(1/p)
  # Store train set
  def fit(self, X_train, y_train):
        self.X_train = X_train
        self.y_train = y_train

    # Make predictions
  def predict(self, X_test):
        preds = []
        # Loop over rows in test set
        for test_row in X_test:
            nearest_neighbours = self.get_neighbours(test_row)
            majority = stats.mode(nearest_neighbours, keepdims=True).mode[0]
            preds.append(majority)
        return np.array(preds)

    # Get nearest neighbours
  def get_neighbours(self, test_row):
        distances = list()

        # Calculate distance to all points in X_train
        for (train_row, train_class) in zip(self.X_train, self.y_train):
            if self.metric=='euclidean':
                dist = self.euclidean(train_row, test_row)
            elif self.metric=='minkowski':
                dist = self.minkowski(train_row, test_row)
            elif self.metric=='manhattan':
                dist = self.manhattan(train_row, test_row)
            else:
                raise NameError('Supported metrics are euclidean, manhattan and minkowski')
            distances.append((dist, train_class))

        # Sort distances
        distances.sort(key=lambda x: x[0])

        # Identify k nearest neighbours
        neighbours = list()
        for i in range(self.k):
            neighbours.append(distances[i][1])

        return neighbours