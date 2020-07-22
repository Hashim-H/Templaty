// middleware function to check for logged-in users

exports.isGuestMiddleware = (req, res, next) => {
    if (!req.session.user) { 
        next();
    } else {
        res.redirect('/');
    }    
};