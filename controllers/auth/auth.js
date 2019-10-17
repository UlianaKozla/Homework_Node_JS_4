module.exports = (req, res) => {
    try {
        const [user] = req.params;
        res.redirect(`userById/${user.id}`)
    }
    catch (e) {
        res.json(e.message);
    }
};
