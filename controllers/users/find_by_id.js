const database = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const { idUsers } = req.params;
        const usermodel = database.getModel('users');
        const flatmodel = database.getModel('flats');

        let user_availability = await usermodel.findAll({
            where: {
               idUsers
            },
            // include: [{
            //     model: flatmodel,
            //     attributes: [ 'City', 'SquereMetres', 'Price']
            // }]
        });

        if (!user_availability) {
            throw new Error(`User is not found`);
        }

        req.user = user_availability;
        next();
        
    } catch (e) {
        res.status(505).json(`User is not found`);
    }
}