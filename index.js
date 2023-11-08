const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const { connectToMongoDb } = require('./config/db');
const { seedDb } = require('./seed');
const { usersRouter } = require('./api/users/users.routes');

// Set up db connection
connectToMongoDb();

if (process.env.NODE_ENV !== 'production') {
    seedDb();
}

// Setup middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

// Setup endpoints
app.use('/api/users', usersRouter);

// Test endpoint
app.get('/', (req, res) => {
    res.send('Docker-mongodb app')
});

app.listen(port, () => {
    console.log(`Listening on port ${port} for requests.`);
});