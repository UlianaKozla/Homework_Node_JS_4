const database = require('../../dataBase').getInstance();

module.exports = async (req,res)=>{
    try {
        const Users = database.getModel('users');
        let allUsers = await Users.findAll();

        if (! allUsers) {
            throw new Error('No users in database')
        }

        res.json(allUsers);
    } catch (e) {
        res.status(400).json(e.message);
    }
};