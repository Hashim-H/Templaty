const User = require('../models/user')
const jwt = require('../services/jwt');
const becrypt = require('../services/becrypt');

// let cookieOptions = {
//   maxAge: 1000 * 60 * 30, // would expire after 30 minutes
//   httpOnly: true, // The cookie only accessible by the web server
// }

exports.login = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    // get the user by email
    let user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      let e = new Error("User does not exist");
      e.status = 422;
      throw e;
    }

    // compare password with the user password saved in the database
    const checkPass = await becrypt.compare(password, user.password)
    if (!checkPass) {
      let e = new Error("wrong password");
      e.status = 422;
      throw e;
    }

    // create new token
    req.session.user = user;

    // update token in the databse & set the cookies
    // res.cookie('token', token, cookieOptions)
    // res.send({ user });

    res.redirect('/')

  } catch (e) {
    console.log("Login Error catched "+e.message)
    req.session.errors= [{msg:e.message}]
    res.redirect('/auth/login')
  }
}

exports.register = async (req, res, next) => {
  try {
    let { email, password, fullName, gender } = req.body

    // check if this email exist in the database 
    let user = await User.findOne({ email: email.toLowerCase() });
    if (user) {
      let e = new Error("user exist");
      e.status = 422;
      throw e;
    }

    // hash the password with becrypt (one way hashing)
    password = await becrypt.hash(password)
    user = await User.create({
      fullName,
      email,
      password,
      fullName,
      gender
    })

    // save token in the databse & set the cookies
    await user.save();

    req.session.user = user;
    // res.cookie('token', token, cookieOptions)
    res.redirect('/')
    // res.send({ user })
  } catch (e) {
    console.log("Login Error catched "+e.message)
    req.session.errors= [{msg:e.message}]
    res.redirect('/auth/login')
  }
}

exports.google = async (req, res, next) => {
  try {
    const {email } = req.user._json

    // check if this email exist in the database 
    let user = await User.findOne({ email: email.toLowerCase() });

    // if yes then login with allow google 
    if (user) {
      // user.token = jwt.sign({ id: user.id });
      // await user.save();
      req.session.user = user
      return res.redirect('/')
    }

    // if not then create new user
    user = await User.create({
      fullName: req.user.displayName,
      googleId: req.user.id,
      email
    })

    await user.save();

    req.session.user = user
    return res.redirect('/')
  } catch (e) {
    next(e)
  }
}

exports.login_view = async (req, res, next) => {
  // console.log(req.flash('error'));
  let errors = req.session.errors;
  req.session.errors = null;
  res.render('login', {
    pageTitle: "WEEEEEEE",
    errors: errors
  });
}

exports.register_view = async (req, res, next) => {
  res.redirect('/auth/login')
}

exports.logout = async (req, res, next) => {
  req.session.destroy()
  res.redirect('/')
}