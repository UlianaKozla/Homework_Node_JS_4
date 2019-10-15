const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const userToDelete = req.body;
        const { idUsers } = req.params;
        const Users = dataBase.getModel('users');

        await Users.delete(userToDelete, {
            where: {
                idUsers
            }
        });

        res.json(`User with id ${idUsers} was deleted`);
    } catch (e) {
        res.json(e.message);
    }
};