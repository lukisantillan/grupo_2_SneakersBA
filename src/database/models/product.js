module.exports = (sequelize,DataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING,
        },    
        price: {
            type: DataTypes.DECIMAL,
        },    
        image: {
            type: DataTypes.STRING,
        },    
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
    },
    }
    /*
    let config ={
        tableName: 'products',
        timestamps: true,
        underscore: true
    }
    */
    const Product = sequelize.define(alias, cols);
    Product.associate = function(models){
        Product.belongsTo(models.Category, {
            as : 'category',
            foreignKey : 'categoryId'
        })
    }
    return Product;
}

// a completar con los datos de la db!!//