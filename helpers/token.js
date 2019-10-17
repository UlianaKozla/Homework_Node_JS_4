const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_REFRESH } = require('../config/config');

module.exports = data => {

    const access_token = jwt.sign(data, JWT_SECRET, {expiresIn:'10m'});
    const reftesh_token = jwt.sign(data, JWT_REFRESH, {expiresIn: '24h'});

    return {
        access_token,
        reftesh_token
    }
}