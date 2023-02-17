const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database.db');
const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

module.exports = function(passport) {
    passport.use(
        new localStrategy((username, password, done) => {
            db.get('SELECT * FROM users WHERE username=$username', {$username: username}, (error, user) => {
                if (error) throw error
                if (!user) return done(null, false);
                bcrypt.compare(password, user.password, (error, result) => {
                    if (error) throw error;
                    if (result === true) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                })
            })
        })
    )

    passport.serializeUser((user, done) => {
        done(null, user.user_id);
    });

    passport.deserializeUser((id, cb) => {
        db.get('SELECT * FROM users WHERE user_id=$id', {$id: id}, (error, user) => {
            cb(error, user);
        })
    })
}