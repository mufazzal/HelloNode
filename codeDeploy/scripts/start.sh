#!/bin/bash
echo "Strating the forver node server" >> 'home/ec2-user/mmmll.txt'
cd /home/ec2-user/Application1

# FIXIT: Bad patch as Codedeploy do not support user defined Enviorment variable
ID=$(curl "http://169.254.169.254/latest/meta-data/instance-id")
# falvaour=$(aws --region us-east-1 ec2 describe-tags --filters Name=resource-id,Values=$ID Name=key,Values=CDP.env.App1Flavour --output json | jq -r '.Tags[0].Value')
# ENV=$(aws --region us-east-1 ec2 describe-tags --filters Name=resource-id,Values=$ID Name=key,Values=CDP.env.ENV --output json | jq -r '.Tags[0].Value')

echo "Starting Application.."

sudo npm run start