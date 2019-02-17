import RPi.GPIO as gpio
import time
led1 = 18
led2 = 23
gpio.setmode(gpio.BCM)
gpio.setup(18,gpio.OUT)
gpio.setup(23,gpio.OUT)
while True:
    gpio.output(led1,gpio.HIGH)
    time.sleep(0.5)
    gpio.output(led1,gpio.LOW)
    time.sleep(0.5)
    gpio.output(led2,gpio.HIGH)
    time.sleep(0.5)
    gpio.output(led2,gpio.LOW)
    time.sleep(0.5)

gpio.cleanup()