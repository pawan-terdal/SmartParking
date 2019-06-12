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


# 18 - trig of US1
# 12 - echo of US1
TRIG1 = 18
ECHO1 = 12
TRIG2 = 5
ECHO2 = 13
TRIG3 = 17
ECHO3 = 22
ir2 = 21
ir3 = 25

cloudMap = {"us1": "Slot_1", "us3": "Slot_6",
            "ir4": "Slot_4", "ir5": "Slot_5", "us2": "Slot_2"}

db = setUpCloud()


def updateCloud(status, key):
    try:
        print(key, status)
        doc_ref = db.collection(u'Parking_System').document(u'Parking Lot 1')
        print(doc_ref)
        doc_ref.update({
            key: status
        })
    except Exception as e:
        print(e)


def initializeStatus():
    status = {}
    status["ir2"] = status["ir3"] = status["ir4"] = status["ir5"] = status["us2"] = "not parked"
    status["us1"] = status["us3"] = "not parked"
    return status


def initializeHardwareSettings():
    gpio.setwarnings(False)
    gpio.setmode(gpio.BCM)
    gpio.setup(TRIG1,gpio.OUT)
    gpio.setup(ECHO1,gpio.IN)
    gpio.setup(TRIG2,gpio.OUT)
    gpio.setup(ECHO2,gpio.IN)
    gpio.setup(TRIG3,gpio.OUT)
    gpio.setup(ECHO3,gpio.IN)
    gpio.setup(ir2, gpio.IN)
    gpio.setup(ir3, gpio.IN)


def getDistanceFromUltrasonic(TRIG,ECHO):
    gpio.output(TRIG,True)
    time.sleep(0.0001)
    gpio.output(TRIG,False)

    while gpio.input(ECHO) == False:
        start = time.time()

    while gpio.input(ECHO) == True:
        end = time.time()

    tot_time = end-start
    dist = tot_time/0.000058
    return dist

def checkIfStatusHasChanged(oldStatus, newStatus, key):
    if(oldStatus[key] != newStatus[key]):
        updateCloud(newStatus[key], cloudMap[key])


if __name__ == "__main__":
    initializeHardwareSettings()
    newStatus = {}
    oldStatus = initializeStatus()
    while True:
        time.sleep(1)
        
        dist = getDistanceFromUltrasonic(TRIG1,ECHO1)
        if(dist < 10):
            newStatus["us1"] = "parked"
        else:
            newStatus["us1"] = "not parked"
        checkIfStatusHasChanged(oldStatus,newStatus,"us1")
        oldStatus["us1"] = newStatus["us1"]

        dist = getDistanceFromUltrasonic(TRIG2,ECHO2)
        if(dist < 10):
            newStatus["us2"] = "parked"
        else:
            newStatus["us2"] = "not parked"
        checkIfStatusHasChanged(oldStatus,newStatus,"us2")
        oldStatus["us2"] = newStatus["us2"]

        dist = getDistanceFromUltrasonic(TRIG3,ECHO3)
        if(dist < 10):
            newStatus["us3"] = "parked"
        else:
            newStatus["us3"] = "not parked"
        checkIfStatusHasChanged(oldStatus,newStatus,"us3")
        oldStatus["us3"] = newStatus["us3"]

        # if gpio.input(ir2) == False:
        #     newStatus["ir2"] = "parked"
        # else:
        #     newStatus["ir2"] = "not parked"
        # checkIfStatusHasChanged(oldStatus, newStatus, "ir2")
        # oldStatus["ir2"] = newStatus["ir2"]

        # if gpio.input(ir3) == False:
        #     newStatus["ir3"] = "parked"
        # else:
        #     newStatus["ir3"] = "not parked"
        # checkIfStatusHasChanged(oldStatus, newStatus, "ir3")
        # oldStatus["ir3"] = newStatus["ir3"]

        # if gpio.input(ir4) == False:
        #     newStatus["ir4"] = "parked"
        # else:
        #     newStatus["ir4"] = "not parked"
        # checkIfStatusHasChanged(oldStatus, newStatus, "ir4")
        # oldStatus["ir4"] = newStatus["ir4"]

        # if gpio.input(ir5) == False:
        #     newStatus["ir5"] = "parked"
        # else:
        #     newStatus["ir5"] = "not parked"
        # checkIfStatusHasChanged(oldStatus, newStatus, "ir5")
        # oldStatus["ir5"] = newStatus["ir5"]













        # if gpio.input(ir1) == False:
        #     newStatus["ir1"] = "parked"
        # else:
        #     newStatus["ir1"] = "not parked"
        # if newStatus["ir1"] != oldStatus["ir1"]:
        #     updateCloud(newStatus["ir1"],"Slot 1")
        #     oldStatus["ir1"] = newStatus["ir1"]
