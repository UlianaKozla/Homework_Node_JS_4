const database = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const { idUser } = req.params;
        const usermodel = database.getModel('users');

        let user_availability = await usermodel.findByPk(idUser);

        if (!user_availability) {
            throw new Error(`User is not found`);
        }

        req.user = user_availability;
        next();
    } catch (e) {
        res.status(505).json(`User is not found`);
    }
}