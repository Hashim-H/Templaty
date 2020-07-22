const app = require('express')
const router = app.Router()

const createCvController = require('../controllers/createCv')
router.get('/createCv', createCvController.createCv)

module.exports = router