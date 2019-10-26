const dataBase = require('../../database').getInstance();

module.exports = async (user, userToUpdate) => {
    const UserModel = dataBase.getModel('users');

    await UserModel.update(userToUpdate, {
        where: user
    })
};