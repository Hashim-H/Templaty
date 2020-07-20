const User = require('../models/user')
const jwt = require('../services/jwt');

exports.checkToken = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      let error = new Error("Missing session");
      error.status = 401;
      throw error;
    }
    let { id } = await jwt.verify(token);
    const user = await User.findOne({ _id: id, token }, { password: 0, token: 0 }); // password: 0, token: 0 -> to remove password and token from res
    if (!user) {
      let error = new Error("unauthorized");
      error.status = 401;
      throw error;
    }
    res.locals.user = user;
    next();
  } catch (e) {
    next(e)
  }
};