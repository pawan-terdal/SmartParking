# import firebase_admin
# from firebase_admin import credentials
# from firebase_admin import firestore
# cred = credentials.Certificate(
#    "/home/pi/Downloads/smartparking-e5020-firebase-adminsdk-coruq-cd7724a120.json")
# firebase_admin.initialize_app(cred)
# db = firestore.client()



import RPi.GPIO as gpio
import time
from config import setUpCloud

ir1 = 18
db = setUpCloud()
def updateCloud(status):
    try:
        print(status)
        doc_ref = db.collection(u'root').document(u'sample')
        doc_ref.update({
            u'status': status
        })
    except:
        print("some problem")


def initializeHardwareSettings():
    gpio.setwarnings(False)
    gpio.setmode(gpio.BCM)
    gpio.setup(ir1, gpio.IN)

if __name__ == "__main__":
    initializeHardwareSettings()
    oldStatus = "not parked"
    while True:
        time.sleep(1)
        if gpio.input(ir1) == False:
            newStatus = "parked"
        else:
            newStatus = "not parked"
        if newStatus != oldStatus:
            updateCloud(newStatus)
            oldStatus = newStatus
