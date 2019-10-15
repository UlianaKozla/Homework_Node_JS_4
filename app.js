const express = require('express');
const expHend = require('express-handlebars');
const path = require('path');

const app = express();
const database = require('./database').getInstance();
database.setmodels()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHend({
    extname: '.hbs',
    defaultLayout: null
}))

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

let { create_page } = require('./controllers');
let { users_router, flats_router, auth_router } = require('./router');

app.get('/', create_page.homepage);

app.use('/users', users_router);
app.use('/flats', flats_router);
app.use('/auth', auth_router);

app.all('*', async (req, res)=> {
    res.status(505).json(`User is not found`);
});

app.listen(3000, () => {
    console.log("3000")
});