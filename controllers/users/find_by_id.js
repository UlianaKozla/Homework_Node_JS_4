module.exports = (req, res) => {
    try {
        const [user] = req.params;
        res.render('userByID', {name: `${user.name}`, surname: `${user.surname}`, city: `${user.city}`})
    }
    catch (e) {
        res.status(400).json(e.message);
    }
}