const app = require('express')
const router = app.Router()
const authMiddleware = require('../middlewares/isAuthenticated');

const createCvController = require('../controllers/createCv')
router.get('/createCv', authMiddleware.isAuthenticatedMiddleware, createCvController.createCv)

module.exports = router