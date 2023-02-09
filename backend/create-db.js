const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database.db');

db.run('CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)');
db.run('INSERT INTO users(username, password) VALUES ($username, $password)', {
    $username: 'admin',
    $password: 'root'
})

db.close()