const { userService } = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const { idUser } = req.params;

        let user_availability = await userService.findByPk(idUser);

        if (!user_availability) {
            throw new Error(`User is not found`);
        }

        req.user = user_availability;

        next();
    } catch (e) {
        res.status(505).json(`User is not found`);
    }
}