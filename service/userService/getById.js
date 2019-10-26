const dataBase = require('../../database').getInstance();

module.exports = async idUsers => {
    const UserModel = dataBase.getModel('users');
    const user = await UserModel.findByPk(idUsers);

    return user && user.dataValues;
}