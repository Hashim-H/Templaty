const app = require('express')
const router = app.Router()

const resumeContollers = require('../controllers/resume')
const printContollers = require('../controllers/print')

const authMiddleware = require('../middlewares/isAuthenticated');

router.get('/resumes', authMiddleware.isAuthenticatedMiddleware, resumeContollers.list)//TODO add is authenicated missleware just like logout
router.get('/resumes/:id',authMiddleware.isAuthenticatedMiddleware, resumeContollers.get)//TODO add is authenicated missleware just like logout
router.post('/resumes', authMiddleware.isAuthenticatedMiddleware, resumeContollers.create)//TODO add is authenicated missleware just like logout
router.delete('/resumes/:id', authMiddleware.isAuthenticatedMiddleware, resumeContollers.remove)//TODO add is authenicated missleware just like logout
router.put('/resumes/:id', authMiddleware.isAuthenticatedMiddleware, resumeContollers.update)//TODO add is authenicated missleware just like logout

router.get('/print', printContollers.templates)
router.get('/print/:name', printContollers.template)
router.get('/print/:template_name/:resume_id', printContollers.print)

module.exports = router