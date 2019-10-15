module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define( 'User', {
        idUsers: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        Name: {
            type:DataTypes.STRING,
            allowNull: false
        },
        Surname: {
            type:DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Password: {
            type:DataTypes.STRING,
            allowNull: false
        },
        City: {
            type:DataTypes.STRING
        }
    }, {
        tableName: 'users',
        timestamps:false
    });

    const Flat = sequelize.import('./flats');
    User.belongsTo(Flat, {foreignKey: 'IdFlat'});
    return User
}