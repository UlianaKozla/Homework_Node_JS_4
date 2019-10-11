module.exports = (req, res) => {
    try {
        const [user] = req.params;
        res.render('userById', { Name : `${user.name}`, Surname : `${user.surname}`, City : `${user.city}`})
    }
    catch (e) {
        res.status(400).json(e.message);
    }
}