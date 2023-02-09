const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database.db');

const createNewUser = (username, password) => {
    db.run('INSERT INTO users (username, password) VALUES ($username, $password)', {
        $username: username,
        $password: password
    });
    console.log('User created');
}

module.exports = {
    createNewUser,
}