const { userService } = require('../../service');

module.exports = async (req,res)=>{
    try {
        let allUsers = await userService.findAll();

        res.json(allUsers);
    } catch (e) {
        res.status(400).json(e.message);
    }
};