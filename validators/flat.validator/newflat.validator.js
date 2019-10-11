module.exports = flat => {
    const {city, squereMetres, price} = flat;

    if (!city || !squereMetres || !price ) {
        throw new Error('Please fill in all inputs')
    }
}