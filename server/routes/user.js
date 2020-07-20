const app = require('express')
const router = app.Router()

const userContollers = require('../controllers/user')

const usermiddlewares = require('../middlewares/user')

router.get('/users/me', usermiddlewares.checkToken, userContollers.me)
router.put('/users/me', usermiddlewares.checkToken, userContollers.update)

module.exports = router