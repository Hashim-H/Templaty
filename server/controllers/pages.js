exports.index = async (req, res, next) => {
    res.render('index', {
        pageTitle: "CONST",
        user: req.session.user
    });
}