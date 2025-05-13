# RandomForest
import numpy as np
from collections import Counter
import random


# =============================
# Tree Node
# =============================
class TreeNode:
    def __init__(self, feature=None, threshold=None, left=None, right=None, value=None):
        self.feature = feature
        self.threshold = threshold
        self.left = left
        self.right = right
        self.value = value


# =============================
# Decision Tree Classifier
# =============================
class DecisionTree:
    def __init__(self, max_depth=10, min_samples_split=2, n_features=None):
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split
        self.n_features = n_features
        self.root = None

    def _entropy(self, y):
        counts = np.bincount(y)
        probs = counts / len(y)
        return -np.sum([p * np.log2(p) for p in probs if p > 0])

    def _best_split(self, X, y, features):
        best_gain = -1
        split_idx, split_thresh = None, None
        parent_entropy = self._entropy(y)

        for feat in features:
            thresholds = np.unique(X[:, feat])
            for thresh in thresholds:
                left_mask = X[:, feat] <= thresh
                right_mask = ~left_mask

                if np.sum(left_mask) == 0 or np.sum(right_mask) == 0:
                    continue

                y_left = y[left_mask]
                y_right = y[right_mask]

                left_weight = len(y_left) / len(y)
                gain = parent_entropy - (
                    left_weight * self._entropy(y_left)
                    + (1 - left_weight) * self._entropy(y_right)
                )

                if gain > best_gain:
                    best_gain = gain
                    split_idx = feat
                    split_thresh = thresh

        return split_idx, split_thresh

    def _build_tree(self, X, y, depth):
        num_samples, num_features = X.shape
        n_classes = len(np.unique(y))

        if (
            depth >= self.max_depth
            or n_classes == 1
            or num_samples < self.min_samples_split
        ):
            leaf_value = Counter(y).most_common(1)[0][0]
            return TreeNode(value=leaf_value)

        feat_indices = np.random.choice(X.shape[1], self.n_features, replace=False)
        best_feat, best_thresh = self._best_split(X, y, feat_indices)

        if best_feat is None:
            leaf_value = Counter(y).most_common(1)[0][0]
            return TreeNode(value=leaf_value)

        left_idxs = X[:, best_feat] <= best_thresh
        right_idxs = ~left_idxs

        left = self._build_tree(X[left_idxs], y[left_idxs], depth + 1)
        right = self._build_tree(X[right_idxs], y[right_idxs], depth + 1)
        return TreeNode(
            feature=best_feat, threshold=best_thresh, left=left, right=right
        )

    def fit(self, X, y):
        if isinstance(X, list):
            X = np.array(X)
        if isinstance(y, list):
            y = np.array(y)
        self.n_features = self.n_features or int(np.sqrt(X.shape[1]))
        self.root = self._build_tree(X, y, 0)

    def _predict(self, x, node):
        if node.value is not None:
            return node.value
        if x[node.feature] <= node.threshold:
            return self._predict(x, node.left)
        else:
            return self._predict(x, node.right)

    def predict(self, X):
        return np.array([self._predict(x, self.root) for x in X])


# =============================
# Random Forest Classifier
# =============================
class RandomForest:
    def __init__(self, n_trees=10, max_depth=10, min_samples_split=2):
        self.n_trees = n_trees
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split
        self.trees = []

    def _bootstrap(self, X, y):
        n_samples = X.shape[0]
        idxs = np.random.randint(0, n_samples, size=n_samples)
        return X[idxs], y[idxs]

    def fit(self, X, y):
        X, y = np.array(X), np.array(y)
        self.trees = []
        for _ in range(self.n_trees):
            tree = DecisionTree(
                max_depth=self.max_depth,
                min_samples_split=self.min_samples_split,
                n_features=int(np.sqrt(X.shape[1])),
            )
            X_sample, y_sample = self._bootstrap(X, y)
            tree.fit(X_sample, y_sample)
            self.trees.append(tree)

    def predict(self, X):
        X = np.array(X)
        tree_preds = np.array([tree.predict(X) for tree in self.trees])
        return np.array(
            [Counter(tree_preds[:, i]).most_common(1)[0][0] for i in range(X.shape[0])]
        )
