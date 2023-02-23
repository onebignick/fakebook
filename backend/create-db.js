const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database.db');
const bcrypt = require('bcryptjs')

const defaultPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    return hashedPassword
}

//db.run('DROP TABLE IF EXISTS users');
db.run('CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, email TEXT, password TEXT, dob DATE, gender TEXT)');
db.run('CREATE TABLE IF NOT EXISTS friends(friendship_id INTEGER PRIMARY KEY AUTOINCREMENT, friend1_id INTEGER NOT NULL REFERENCES(users.user_id), friend2_id INTEGER NOT NULL REFERENCES(users.user_id)');
db.run('CREATE TABLE IF NOT EXISTS groups(group_id INTEGER PRIMARY KEY AUTOINCREMENT, group_name TEXT, group_creation_date DATE');

password = defaultPassword('root');

db.run