# balancing.py
from imblearn.over_sampling import SMOTE
from sklearn.model_selection import train_test_split


# Cân bằng dữ liệu bằng SMOTE
def split_and_smote(X, y):

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, stratify=y, test_size=0.2, random_state=42
    )

    smote = SMOTE(random_state=42)

    X_train_balanced, y_train_balanced = smote.fit_resample(X_train, y_train)

    return X_train_balanced, X_test, y_train_balanced, y_test
