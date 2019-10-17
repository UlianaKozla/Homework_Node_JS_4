const { flatService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const newFlat = req.body;

        await flatService.create(newFlat);

        res.render('flats');
    } catch (e) {
        res.json(e.message);
    }
};