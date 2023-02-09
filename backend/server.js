const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database.db');

const dbq = require('./queries');
const port = 5000;
const app = express();


passport.use(
    new LocalStrategy((username, password, done) => {
        console.log(username)
        db.each('SELECT EXISTS(SELECT * FROM users WHERE username=?)', [username], (error, valid) => {
            if (valid) {
                db.each('SELECT * FROM users WHERE username=?', [username], (error, user) => {
                    if (error) {return done(null, error)}
                    if (user.password != password) {return done(null, false)}
                    return done(null, user);
                })
             } else {
                return done(null, false);
             }
        })
    })
)

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user.user_id)
});
passport.deserializeUser((id, done) => {
    db.each('SELECT * FROM users WHERE user_id = $id', {$id: id}, (error, user) => {
        done(error, user);
    });
})

app.use(cors(
    {credentials: true}
))
app.use(express.json())


app.post('/log-in', passport.authenticate('local'), (request, response, info) => {
    response.cookie('session', request.session)
    if (request.sessionID) {
        return response.send({session: request.sessionID})
    }
})

app.post('/check-login', (request, response) => {
    if (request.session) {
        response.send(true);
    } else {
        respond.send(false);
    }
})

app.get("/log-out", (req, res, next) => {
    console.log(req.sessionID)
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      console.log(req.sessionID);
      res.redirect("/");
    });
  });
app.post('/sign-up', (request, response) => {
    console.log(request.body)
    dbq.createNewUser(request.body.username, request.body.password)
})

app.listen(port, () => console.log(`running on http://localhost:${port}`));