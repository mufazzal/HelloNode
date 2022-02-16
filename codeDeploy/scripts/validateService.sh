#!/bin/bash
echo "I am in validateService" >> 'home/ec2-user/mmmll.txt'
sleep 20
echo "App1 Health is ->"
curl localhost:3010/health