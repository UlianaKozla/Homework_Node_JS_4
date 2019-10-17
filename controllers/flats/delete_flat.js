const { flatService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const flatToDelete = req.body;

        await flatService.delete(flatToDelete);

        res.json(`Flat was deleted`);
    } catch (e) {
        res.json(e.message);
    }
};
