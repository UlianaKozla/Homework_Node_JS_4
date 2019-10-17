const { flatService } = require('../../service');

module.exports = async (req,res)=>{
    try {
        let allFlats = await flatService.findAll();

        res.json(allFlats);
    } catch (e) {
        res.status(400).json(e.message);
    }
};