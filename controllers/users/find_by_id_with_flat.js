const database = require('../../database').getInstance();
const {userService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const { idUsers } = req.params;
        const flatmodel = database.getModel('flats');

        const flats = await flatmodel.findAll({
            where: {
                idUsers
            }
        });

        const user = await userService.findByPk(idUsers);

        user.dataValues.flats = flats;

        return user && user.dataValues;
    } catch (e) {
        res.status(505).json(`User is not found`);
    }
}