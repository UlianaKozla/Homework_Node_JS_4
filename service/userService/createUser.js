const dataBase = require('../../database').getInstance();

module.exports = async newUser => {
    const UserModel = dataBase.getModel('users');

    await UserModel.create(newUser);
};