const {flat_validator} = require('../../validators')
module.exports = (req, res, next) => {
    try {
        const flat = req.body;
        flat_validator.newflat_validator(flat);
        next()
    } catch (e) {
        res.status(404).json(e.message)
    }
}