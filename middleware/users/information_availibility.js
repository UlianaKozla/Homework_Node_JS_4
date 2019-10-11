const {user_validator} = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const user = req.body;
        user_validator.newuser_validator(user);
        next()
    } catch (e) {
        res.status(404).json(e.message)
    }
}