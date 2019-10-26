const { flatService } = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const { idFlat } = req.params;

        let flat_availability = await flatService.findByPk(idFlat);

        if (!flat_availability) {
            throw new Error(`Flat is not found`);
        }

        req.flat = flat_availability;

        next();
    } catch (e) {
        res.status(505).json(`Flat is not found`);
    }
}