const database = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const newFlat = req.body;
        const Flats = database.getModel('flats');

        await Flats.create(newFlat);

        res.render('flats');
    }
    catch (e) {
        res.json(e.message);
    }
}