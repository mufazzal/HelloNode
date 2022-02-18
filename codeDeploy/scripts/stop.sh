#!/bin/bash
echo "Stopping the httpd in EC2" >> 'home/ec2-user/mmmll.txt'
cd /home/ec2-user/Application1
sudo npm run stop
