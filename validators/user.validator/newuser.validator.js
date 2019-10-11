module.exports = user => {
    const {name, email, password, city} = user;

    if(!name || !email || !password || !city) {
        throw new Error('Please fill in all inputs')
    }
}