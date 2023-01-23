module.exports = (sequelize, type) =>{
    return sequelize.define('student',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: type.STRING,
        lastName: type.STRING,        
    })
}