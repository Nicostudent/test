const Sequelize = require('sequelize');

const StudentModel = require('./models/students');
const SignatureModel = require('./models/signatures');

const sequelize = new Sequelize('alumni', 'admin', 'password',{
    host: 'localhost',
    dialect: 'mysql'
});

const Student = StudentModel(sequelize, Sequelize);
const Signature = SignatureModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(() =>{
        console.log('tabla creada');
    })

// relations
Student.hasMany(Signature);
Signature.belongsTo(Student);

module.exports = {
    Student,        
    Signature,
}


