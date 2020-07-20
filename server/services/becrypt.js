const bcrypt = require('bcryptjs');

exports.hash = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })
}

exports.compare = (password, hash) => {
  return bcrypt.compare(password, hash)
}