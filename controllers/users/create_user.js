const {provider} = require('../../database');

module.exports = async (req, res) => {
    try {
        const {name, email, password, city} = req.body;
        const query =  `INSERT INTO users (name, email, password, city) VALUES (?, ?, ?, ?)`;
        await provider.promise().query(query, [name, email, password, city]);
        res.render('login');
    }
    catch (e) {
        res.status(400).json(e.message);
    }
}