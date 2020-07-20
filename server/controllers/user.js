const User = require('../models/user')

exports.me = async (req, res, next) => {
  try {
    const { user } = res.locals
    res.send({ user });
  } catch (e) {
    next(e)
  }
}

exports.update = async (req, res, next) => {
  try {
    let { user } = res.locals
    const { fullName, gender } = req.body
    user = await User.findOneAndUpdate({
      _id: user.id,
    }, {
      fullName,
      gender
    }, {
      new: true // OverRide
    })
    res.send({ user });
  } catch (e) {
    next(e)
  }
}