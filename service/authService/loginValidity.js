const dataBase = require('../../database').getInstance();

module.exports = async (email, password) => {
    const UserModel = dataBase.getModel('users');

    const loginData = await UserModel.findOne({
        where: {
            email,
            password
        },
        attributes: ['idUsers']
    });

    if (!loginData) {
        throw new Error('Bad login or password');
    }

    return loginData;
};