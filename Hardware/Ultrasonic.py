import RPi.GPIO as gpio
import time

gpio.setmode(gpio.BCM)

ECHO = 12
TRIG = 18
start = end = 0
gpio.setup(TRIG,gpio.OUT)
gpio.setup(ECHO,gpio.IN)
gpio.setwarnings(False)

while True:
    time.sleep(1)
    gpio.output(TRIG,True)
    time.sleep(0.0001)
    gpio.output(TRIG,False)

    while gpio.input(ECHO) == False:
        start = time.time()

    while gpio.input(ECHO) == True:
        end = time.time()

    tot_time = end-start
    dist = tot_time/0.000058
    if(dist < 10):
        print("Distance: {} cm".format(dist))
gpio.cleanup()