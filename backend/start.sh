#!/bin/sh

python3 -m venv venv
source venv/bin/activate
# pip install -r requirements.txt
FLASK_APP=app.py
systemctl restart mongodb.service
flask run & mongod
# git subtree push --prefix backend heroku master