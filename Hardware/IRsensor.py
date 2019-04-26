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
ir2 = 23
ir3 = 25
ir4 = 17
ir5 = 22
ir6 = 13

cloudMap = {"ir1": "Slot_1", "ir2": "Slot_2", "ir3": "Slot_3",
            "ir4": "Slot_4", "ir5": "Slot_5", "ir6": "Slot_6"}

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
    status["ir1"] = "far"
    status["ir2"] = status["ir3"] = status["ir4"] = status["ir5"] = status["ir6"] = "not parked"
    return status


def initializeHardwareSettings():
    gpio.setwarnings(False)
    gpio.setmode(gpio.BCM)
    gpio.setup(ir1, gpio.IN)
    gpio.setup(ir2, gpio.IN)
    gpio.setup(ir3, gpio.IN)
    gpio.setup(ir4, gpio.IN)
    gpio.setup(ir5, gpio.IN)
    gpio.setup(ir6, gpio.IN)


def checkIfStatusHasChanged(oldStatus, newStatus, key):
    if(oldStatus[key] != newStatus[key]):
        updateCloud(newStatus[key], cloudMap[key])


if __name__ == "__main__":
    initializeHardwareSettings()
    newStatus = {}
    oldStatus = initializeStatus()
    while True:
        time.sleep(1)
        if gpio.input(ir1) == False:
            newStatus["ir1"] = "near"
        else:
            newStatus["ir1"] = "far"
        checkIfStatusHasChanged(oldStatus, newStatus, "ir1")
        oldStatus["ir1"] = newStatus["ir1"]

        if gpio.input(ir2) == False:
            newStatus["ir2"] = "parked"
        else:
            newStatus["ir2"] = "not parked"
        checkIfStatusHasChanged(oldStatus, newStatus, "ir2")
        oldStatus["ir2"] = newStatus["ir2"]

        if gpio.input(ir3) == False:
            newStatus["ir3"] = "parked"
        else:
            newStatus["ir3"] = "not parked"
        checkIfStatusHasChanged(oldStatus, newStatus, "ir3")
        oldStatus["ir3"] = newStatus["ir3"]

        if gpio.input(ir4) == False:
            newStatus["ir4"] = "parked"
        else:
            newStatus["ir4"] = "not parked"
        checkIfStatusHasChanged(oldStatus, newStatus, "ir4")
        oldStatus["ir4"] = newStatus["ir4"]

        if gpio.input(ir5) == False:
            newStatus["ir5"] = "parked"
        else:
            newStatus["ir5"] = "not parked"
        checkIfStatusHasChanged(oldStatus, newStatus, "ir5")
        oldStatus["ir5"] = newStatus["ir5"]

        if gpio.input(ir6) == False:
            newStatus["ir6"] = "parked"
        else:
            newStatus["ir6"] = "not parked"
        checkIfStatusHasChanged(oldStatus, newStatus, "ir6")
        oldStatus["ir6"] = newStatus["ir6"]

        # if gpio.input(ir1) == False:
        #     newStatus["ir1"] = "parked"
        # else:
        #     newStatus["ir1"] = "not parked"
        # if newStatus["ir1"] != oldStatus["ir1"]:
        #     updateCloud(newStatus["ir1"],"Slot 1")
        #     oldStatus["ir1"] = newStatus["ir1"]
