const database = require('../../dataBase').getInstance();

module.exports = async (req,res)=>{
    try {
        const Flats = database.getModel('flats');
        let allFlats = await Flats.findAll();

        if (! allFlats) {
            throw new Error('No flats in database')
        }

        res.json(allFlats);
    } catch (e) {
        res.status(400).json(e.message);
    }
};