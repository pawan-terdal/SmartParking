import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import RPi.GPIO as gpio
import time
cred = credentials.Certificate(
    "/home/pi/Downloads/smartparking-e5020-firebase-adminsdk-coruq-cd7724a120.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

def updateCloud(status):
    doc_ref = db.collection(u'root').document(u'sample')
    doc_ref.update({
        u'status': status
    })


def initializeHardwareSettings():
    gpio.setwarnings(False)
    gpio.setmode(gpio.BCM)
    gpio.setup(18, gpio.IN)


if __name__ == "__main__":
    time.sleep(2)
    initializeHardwareSettings()
    while True:
        if(gpio.input(18) == False):  # parked
            updateCloud("parked")
            print("parked")
        else:
            updateCloud("not parked")
            print("not parked")
