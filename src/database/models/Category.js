module.exports = (sequelize,DataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        name: DataTypes.STRING,
    }
    
    let config ={
        tableName: 'products',
        timestamps: false
    }
    
    const Category = sequelize.define(alias, cols);
    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as : 'products',
            foreignKey : 'categoryId'
        })
    }
    return Category;
}


// a completar con los datos de la db!!//