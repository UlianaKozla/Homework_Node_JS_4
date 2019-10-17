module.exports = (sequelize, DataTypes) => {
    const Flat = sequelize.define( 'Flat', {
        idFlat: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        City: {
            type:DataTypes.STRING,
            allowNull: false
        },
        SquereMetres: {
            type:DataTypes.DOUBLE,
            allowNull: false
        },
        Price: {
            type:DataTypes.DOUBLE,
            allowNull: false,
        },
        idUsers: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }
    }, {
        tableName: 'flats',
        timestamps: false
    });

    const User = sequelize.import('./users');
    Flat.belongsTo(User, {foreignKey: 'idUsers'});

    return Flat
}