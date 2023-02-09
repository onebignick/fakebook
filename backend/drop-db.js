const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database.db');

db.run('DROP TABLE IF EXISTS users')

db.close()