module.exports = (req, res) => {
    const [flat] = req.params;
    res.render('flatByID', {SquereMetres: `${flat.SquereMetres}`, Price: `${flat.price}`, City: `${flat.city}`})
}