module.exports = (req, res) => {
    try {
        const [flat] = req.params;
        res.render('flatByID', {SquereMetres: `${flat.SquereMetres}`, Price: `${flat.price}`, City: `${flat.city}`})
    }
    catch (e) {
        res.status(400).json(e.message);
    }
}