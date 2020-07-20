exports.set = function (app, v) {
  app.use(v, require('./user'))
  app.use(v, require('./auth'))
  app.use(v, require('./resume'))
  app.use(v, require('./pages'))
}