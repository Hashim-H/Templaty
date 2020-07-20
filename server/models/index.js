const mongoose = require('mongoose');
const config = require('../config')

module.exports = mongoose.connect(config.mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  logger: true
});