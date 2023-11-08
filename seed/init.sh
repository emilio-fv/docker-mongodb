#!/bin/sh
mongoimport --db docker-mongodb --collection users --drop --file Users.json --jsonArray --uri mongodb://mongo:27017