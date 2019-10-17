const {userService} = require('../../service');

module.exports = async (req, res, next) => {
    const {Email, Password} = req.body;

    const user = await userService.getUserByParams({Email, Password});

    if (!user) {
        throw new Error('User is not found');
    }

    req.user = user;

    next()
};