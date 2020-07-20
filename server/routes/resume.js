const app = require('express')
const router = app.Router()

const resumeContollers = require('../controllers/resume')

const usermiddlewares = require('../middlewares/user')

router.get('/resumes', usermiddlewares.checkToken, resumeContollers.list)
router.get('/resumes/:id', usermiddlewares.checkToken, resumeContollers.get)
router.post('/resumes', usermiddlewares.checkToken, resumeContollers.create)
router.delete('/resumes/:id', usermiddlewares.checkToken, resumeContollers.remove)
router.put('/resumes/:id', usermiddlewares.checkToken, resumeContollers.update)

module.exports = router