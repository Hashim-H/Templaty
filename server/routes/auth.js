const app = require('express')
const router = app.Router()

const authContoller = require('../controllers/auth')
const passport = require('../services/passport')

const authMiddleware = require('../middlewares/isAuthenticated');
const guestMiddleware = require('../middlewares/isGuest');
// normal
router.get('/auth/login', guestMiddleware.isGuestMiddleware, authContoller.login_view)
router.post('/auth/login', guestMiddleware.isGuestMiddleware, authContoller.login)


router.get('/auth/register', guestMiddleware.isGuestMiddleware, authContoller.register_view)
router.post('/auth/register', guestMiddleware.isGuestMiddleware, authContoller.register)

router.get('/auth/logout', authMiddleware.isAuthenticatedMiddleware, authContoller.logout) 


// google
router.get('/auth/google/login', guestMiddleware.isGuestMiddleware, passport.authenticate('google', {
  scope: ['profile', 'email']
}))
router.get('/auth/google/callback', guestMiddleware.isGuestMiddleware, passport.authenticate('google'), authContoller.google)

module.exports = router