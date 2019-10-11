const {provider} = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const { idFlat } = req.params;
        const query = `SELECT * FROM users WHERE id = ${idFlat}`;
        const [flat_availability] = await provider.promise().query(query);

        if (!flat_availability.length) {
            throw new Error(`Flat is not found`);
        }

        req.falt = flat_availability;
        next();
    } catch (e) {
        res.status(505).json(`Flat is not found`);
    }
}