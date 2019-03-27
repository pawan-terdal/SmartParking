import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

def setUpCloud():
    try:
        cred = credentials.Certificate(
        "/home/pi/Downloads/smartparking-e5020-firebase-adminsdk-coruq-cd7724a120.json")
        firebase_admin.initialize_app(cred)
        db = firestore.client()
    except:
        print("problem connecting to cloud")

    return db
    
if __name__ == "__main__":
    setUpCloud()