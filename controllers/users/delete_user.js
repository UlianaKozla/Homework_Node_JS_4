const { userService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const newUser = req.body;

        await userService.create(newUser);

        res.json(`User was deleted`);
    } catch (e) {
        res.json(e.message);
    }
};