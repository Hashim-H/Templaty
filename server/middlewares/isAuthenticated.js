// middleware function to check for logged-in users

exports.isAuthenticatedMiddleware = (req, res, next) => {
    if (req.session.user) { //TODO check for real session properties
        next();
    } else {
        res.redirect('/auth/login');
    }    
};