const app = require('express')
const router = app.Router()

const pagesContoller = require('../controllers/pages')
router.get('/', pagesContoller.index)

module.exports = router