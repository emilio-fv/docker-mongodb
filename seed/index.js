const { generateUsers } = require('./scripts/users');
const { User } = require('../api/users/users.model');

const usersData = generateUsers();

const seedDb = async () => {
    await User.deleteMany({});
    await User.insertMany(usersData);
}

module.exports = {
    seedDb
}