const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const flatToDelete = req.body;
        const { idFlats } = req.params;
        const Flats = dataBase.getModel('flats');

        await Flats.delete(flatToDelete, {
            where: {
                idFlats
            }
        });

        res.json(`User with id ${idFlats} was deleted`);
    } catch (e) {
        res.json(e.message);
    }
};