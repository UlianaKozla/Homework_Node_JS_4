const dataBase = require('../../database').getInstance();

module.exports = async existentUser => {
    const UserModel = dataBase.getModel('users');

    await UserModel.delete(existentUser);
};