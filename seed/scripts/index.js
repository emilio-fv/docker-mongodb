const fs = require('fs');
const { generateUsers } = require('./users');

console.log('Generate fake database');

const users = generateUsers();

const jsonObj = JSON.stringify(users);

fs.writeFileSync('Users.json', jsonObj);