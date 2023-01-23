const router = require('express').Router();
const { Student, Signature } = require('../../db');

router.get('/', async (req, res) =>{
    const students = await Student.findAll({
        include: [{
            model: Signature
        }]
    })
    res.json(students)
});
router.post('/', async (req, res) =>{    
    const {name, lastName,  } = req.body
        const student = await Student.create({
            name,
            lastName           
        })
    res.json(student)
});

//route of detail

router.get('/:id', async (req, res) =>{
    const {id} = req.params
    const student = await Student.findOne({
        where: {
            id
        },
        include: [{
            model: Signature
        }]    
    })
    res.send(student)
})


router.delete('/:id', async (req, res) =>{
    const {id} = req.params
    const del = await Student.destroy({
        where: {
            id
        }
    })
    res.send("borrado corectamente")

})

module.exports = router;