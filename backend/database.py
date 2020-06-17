import os

from pymongo import MongoClient
from bson.json_util import dumps
from processing import get_data, update_file

MONGODB_URI = os.environ.get("MONGODB_URI")
if not MONGODB_URI:
    MONGODB_URI = "mongodb://localhost:27017/covid-tests"
else:
    MONGODB_URI = MONGODB_URI + "?retryWrites=false"

db = MongoClient(MONGODB_URI).get_database()
collection = db["labs"]


def update_labs():
    update_file()
    labs = get_data()
    collection.delete_many({})
    collection.insert_many(labs)

    return collection


def get_labs():
    data = collection.find({})
    return dumps(data)
