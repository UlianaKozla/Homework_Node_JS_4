module.exports = (req, res) => {
    const [user] = req.params;
    res.redirect(`userById/${user.id}`)
};
