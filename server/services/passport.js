const passport = require('passport')
const { Strategy } = require('passport-google-oauth20')

const config = require('../config')

passport.use(new Strategy({
  clientID: config.googleId,
  clientSecret: config.googleSecret,
  callbackURL: config.googleCallbackURL
}, function (accessToken, refreshToken, profile, cb) {
  return cb(null, profile);
}));

module.exports = passport;