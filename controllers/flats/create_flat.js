const {provider} = require('../../database');

module.exports = async (req, res) => {
    try {
        const {squereMetres, price, city} = req.body;
        const query =  `INSERT INTO users (squereMetres, price, city) VALUES (?, ?, ?, ?)`;
        await provider.promise().query(query, [squereMetres, price, city]);
        res.render('flats');
    }
    catch (e) {
        res.status(400).json(e.message);
    }
}