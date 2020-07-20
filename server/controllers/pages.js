exports.index = async (req, res, next) => {
    res.render('index', {
        pageTitle: "WEEEEEEE",
        user: req.session.user
    });
}