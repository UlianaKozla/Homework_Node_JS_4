const database = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const newUser = req.body;
        const Users = database.getModel('users');

        await Users.create(newUser);

        res.render('auth');
    }
    catch (e) {
        res.json(e.message);
    }
}