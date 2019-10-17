const { userService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const userToUpdate = req.body;
        const { idUsers } = req.params;
        const { id } = req.user;

        if (+idUsers !== id) {
            throw new Error('You do not have access to this user')
        }

        await userService.updateUser({id: idUsers}, userToUpdate)

        res.redirect(`/users/${idUsers}`)
    } catch (e) {
        res.json(e.message);
    }
};