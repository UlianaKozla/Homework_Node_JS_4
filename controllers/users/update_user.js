const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const userToUpdate = req.body;
        const { idUsers } = req.params;
        const Users = dataBase.getModel('users');

        await Users.update(userToUpdate, {
            where: {
                idUsers
            }
        });

        res.redirect(`/users/${idUsers}`)
    } catch (e) {
        res.json(e.message);
    }
};