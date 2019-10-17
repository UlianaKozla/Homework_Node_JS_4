const dataBase = require('../../database').getInstance();

module.exports = async newFlat => {
    const flatModel = dataBase.getModel('flats');

    await flatModel.create(newFlat);
};