// middleware function to check for logged-in users

exports.isAuthenticatedMiddleware = (req, res, next) => {
    if (req.session.user) { 
        next();
    } else {
        res.redirect('/auth/login');
    }    
};