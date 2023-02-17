const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database.db');
const bcrypt = require('bcryptjs')

const defaultPassword = async () => {
    const hashedPassword = await bcrypt.hash('root', 10)
    db.run('INSERT INTO users(username, password) VALUES ($username, $password)', {
        $username: 'admin',
        $password: hashedPassword
    })
    return
}

//db.run('DROP TABLE IF EXISTS users');
//db.run('CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)');
defaultPassword()