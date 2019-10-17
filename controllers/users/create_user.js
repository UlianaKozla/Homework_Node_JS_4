const { userService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const newUser = req.body;

        await userService.create(newUser);

        res.render('auth');
    } catch (e) {
        res.json(e.message);
    }
};