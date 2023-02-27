// Imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const localStrategy = require("passport-local").Strategy;
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database.db');

const port = 5000;
const app = express();
//--------------------------END OF IMPORTS----------------------------

//--------------------------START OF MIDDLEWARE------------------------
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser('secretcode'));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);
//--------------------------END OF MIDDLEWARE----------------------------

//--------------------------START OF ROUTES----------------------------
app.post('/login', (request, response, next) => {
    passport.authenticate('local', (error, user, info) => {
        if (error) throw error;
        if (!user) response.send(null)
        else {
            request.logIn(user, error => {
                if (error) throw error;
                response.send(request.user)
            })
        }
    })(request, response, next);
});

app.post('/logout', (request, response, next) => {
    request.logout((error) => {
        if (error) return next(error);
        response.send()
    })
});

app.post('/signup', (request, response) => {
    db.get('SELECT * FROM users WHERE username=$username', {
        $username: request.body.username
    }, async (error, user) => {
        if (error) throw error
        else if (user) response.send('User already exists')
        else if (!user) {
            const hashedPassword = await bcrypt.hash(request.body.password, 10);
            db.run('INSERT INTO users (username, password) VALUES ($username, $password)', {
                $username: request.body.username,
                $password: hashedPassword
            }, (error) => {
                if (error) throw error
                response.send('Success');
            })
        }
    })
});

app.get('/user', (request, response) => {
    response.send(request.user);
});
//--------------------------END OF ROUTES----------------------------

app.listen(port, () => console.log(`running on http://localhost:${port}`));