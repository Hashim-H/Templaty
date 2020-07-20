const express = require('express')
let mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const passport = require('passport');
const cors = require("cors");
const path = require("path");
const router = express.Router();
const session = require('express-session')
const sessionFileStore = require('session-file-store')(session);


//require('dotenv').config();

const port = parseInt(process.env.PORT) || 5000;

const app = express();

// app.use(cookieParser());
// Express-Sesssion Configuration
app.use(session({
    store: new sessionFileStore({
        path: `${__dirname}/tmp`
    }),
    name: 'templaty_id', //TODO change to env variable
    secret: 'somerandonstuffs',//TODO change to env variable
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 3600000 * 24
    }
}));
// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
// app.use((req, res, next) => {
//     if (req.cookies.templaty_id && !req.session.user) {
//         res.clearCookie('templaty_id');        
//     }
//     next();
// });


// Mustache Templating Engine Configuration
app.set('views', `${__dirname}/server/views`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());
app.set('trust proxy', true);
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(bodyParser.json());
// app.use(cors());
app.use(passport.initialize())

app.use(express.static(path.resolve(__dirname, "./public"))); // load frontend

passport.serializeUser(function(user, cb) {
    cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

require('./server/models') //start the database
require('./server/routes').set(app, '/'); //api versioning www.url.com/api/v1/....

app.use((err, req, res, next) => {
    if (err) {
        console.log(err)
        res.status(err.status || 500).send({ message: err.message || 'unkown error' });
    }
});

app.get('*', (req, res) => res.status(404).send('wrong path'));

app.listen(port, () => {
    console.log('start on', port);
})