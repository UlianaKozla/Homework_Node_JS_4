const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const flatToUpdate = req.body;
        const { idFlats } = req.params;
        const Flats = dataBase.getModel('flats');

        await Flats.update(flatToUpdate, {
            where: {
                id: idFlats
            }
        });

        res.redirect(`/flats/${idFlats}`)
    } catch (e) {
        res.json(e.message);
    }
};