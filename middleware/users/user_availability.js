const {provider} = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const { idUser } = req.params;
        const query = `SELECT * FROM users WHERE id = ${idUser}`;
        const [user_availability] = await provider.promise().query(query);

        if (!user_availability.length) {
            throw new Error(`User is not found`);
        }

        req.user = user_availability;
        next();
    } catch (e) {
        res.status(505).json(`User is not found`);
    }
}