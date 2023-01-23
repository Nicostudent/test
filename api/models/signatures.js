const { ARRAY } = require("sequelize")

module.exports = (sequelize, type) =>{
    return sequelize.define('signature',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        signatureName: type.STRING,
        signatureScore: type.ENUM('passed', 'pending', 'fail'),
        professor: type.STRING                        
    })
}