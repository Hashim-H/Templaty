const jwt = require("jsonwebtoken");

const config = require('../config')

exports.verify = (token) => {
  return jwt.verify(token, config.jwtSecret)
}

exports.sign = (data) => {
  return jwt.sign(data, config.jwtSecret)
}