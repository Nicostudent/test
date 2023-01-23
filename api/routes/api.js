const router = require('express').Router();

const apiStudentRouter = require('./api/student');
const apiSignatureRouter = require('./api/signatures')

router.use('/student', apiStudentRouter)
router.use('/signature', apiSignatureRouter)

router.get('/', (req, res) =>{
    res.send("hellow horled")
})
module.exports = router;