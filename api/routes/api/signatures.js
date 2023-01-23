const router = require('express').Router();
const { Signature, Student } = require('../../db');

router.get('/', async (req, res) =>{
    const signature = await Signature.findAll({
        include: [{
            model: Student
        }]
    });
    res.json(signature)
});
router.post('/', async (req, res) =>{
    const {signatureName, signatureScore, professor, studentId} = req.body
    const signature = await Signature.create({
        signatureName,
        signatureScore,
        professor,
        studentId
    });
    res.json(signature)
});

module.exports = router;