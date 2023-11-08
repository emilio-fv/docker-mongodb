const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://mongo:27017/docker-mongodb';

const connectToMongoDb = async () => {
    try {
        console.log('connecting to mongodb at ' + MONGODB_URI);
        // const options = { useNewUrlParser: true, useUnifiedTopology: true };
        const connection = await mongoose.connect(MONGODB_URI);

        if (connection) {
            console.log('Connected to db successfully');
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    connectToMongoDb
};