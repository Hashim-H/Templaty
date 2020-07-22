exports.createCv= async (req, res, next) => {
    res.render('createCv', {
        pageTitle: "CONST",
        user: req.session.user
    });
}