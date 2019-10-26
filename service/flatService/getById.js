const dataBase = require('../../database').getInstance();

module.exports = async idFlat => {
    const FlatModel = dataBase.getModel('flats');
    const flat = await FlatModel.findByPk(idFlat);

    return flat && flat.dataValues;
}