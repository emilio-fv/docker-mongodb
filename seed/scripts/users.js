const { faker } = require('@faker-js/faker');

const generateUsers = () => {
    let users = [];

    for (let i = 0; i < 10; i ++) {
        users.push(createUser());
    }

    return users;
};

const createUser = () => {
    const user = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    return user;
};

module.exports = {
    generateUsers
};