const app = require('express')
const router = app.Router()

const resumeContollers = require('../controllers/resume')
const printContollers = require('../controllers/print')

const authMiddleware = require('../middlewares/isAuthenticated');

router.get('/resumes', authMiddleware.isAuthenticatedMiddleware, resumeContollers.list)
router.get('/resumes/:id',authMiddleware.isAuthenticatedMiddleware, resumeContollers.get)
router.post('/resumes', authMiddleware.isAuthenticatedMiddleware, resumeContollers.create)
router.delete('/resumes/:id', authMiddleware.isAuthenticatedMiddleware, resumeContollers.remove)
router.put('/resumes/:id', authMiddleware.isAuthenticatedMiddleware, resumeContollers.update)

router.get('/print', authMiddleware.isAuthenticatedMiddleware, printContollers.templates)
router.get('/print/:name', authMiddleware.isAuthenticatedMiddleware, printContollers.template)
router.get('/print/:template_name/:resume_id', authMiddleware.isAuthenticatedMiddleware, printContollers.print)

module.exports = router