const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database.db');
const bcrypt = require('bcryptjs')

const defaultPassword = async (password) => {
    console.log(password)
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    return hashedPassword
}

db.serialize(async () => {
    db.run('DROP TABLE IF EXISTS users');
    db.run('DROP TABLE IF EXISTS friends');
    db.run('DROP TABLE IF EXISTS groups');

    db.run('CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, email TEXT, password TEXT, dob DATE, gender TEXT, profile_picture TEXT)');
    db.run('CREATE TABLE IF NOT EXISTS friends(friendship_id INTEGER PRIMARY KEY AUTOINCREMENT, friend1_id INTEGER, friend2_id INTEGER, FOREIGN KEY (friend1_id) REFERENCES users(user_id), FOREIGN KEY (friend2_id) REFERENCES users(user_id))');
    db.run('CREATE TABLE IF NOT EXISTS groups(group_id INTEGER PRIMARY KEY AUTOINCREMENT, group_name TEXT, group_creation_date DATE)');

    const password = await defaultPassword('root');

    db.run('INSERT INTO users(firstname, lastname, email, password, dob, gender, profile_picture) VALUES ($firstname, $lastname, $email, $password, $dob, $gender, $profile_picture)', {
        $firstname: 'john',
        $lastname: 'doe',
        $email: 'admin@test.com',
        $password: password,
        $dob: '2000-01-01',
        $gender: 'male',
        $profile_picture: 'http://localhost:3000/images/default_picture.jpg'
    });
})