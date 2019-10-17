const dataBase = require('../../database').getInstance();

module.exports = async existentFlat => {
    const flatModel = dataBase.getModel('flats');

    await flatModel.delete(existentFlat);
};