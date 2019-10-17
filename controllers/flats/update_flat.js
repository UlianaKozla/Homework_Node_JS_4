const { flatService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const flatToUpdate = req.body;
        const { idFlat } = req.params;
        const { id } = req.user;

        if (+idFlat !== id) {
            throw new Error('You do not have access to this flat')
        }

        await flatService.({id: idUsers}, userToUpdate)

        res.redirect(`/users/${idUsers}`)
    } catch (e) {
        res.json(e.message);
    }
};