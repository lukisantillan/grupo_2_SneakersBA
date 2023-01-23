module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: dataTypes.STRING,
        },    
        lastName: {
            type: dataTypes.STRING,
        },    
        email: {
            type: dataTypes.STRING,
        },    
        password: {
            type: dataTypes.STRING,
        },    
        avatar: {
            type: dataTypes.STRING,
        },    
        role: {
            type: dataTypes.INTEGER
        },    
    };
    /*let config = {
        tableName: 'users',
        timestamps: false
    };*/
        
    
    const User = sequelize.define(alias, cols)
    return User;
    }


    // Completar con los datos de la db//