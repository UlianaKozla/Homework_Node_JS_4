const express = require('express');
const expHend = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHend({
    extname: '.hbs',
    defaultLayout: null
}))

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

let { users, flats, create_page } = require('./controllers');
let { user_middleware, flat_middleware } = require('./middleware');

app.get('/', create_page.homepage);
app.get('/register', create_page.register);
app.get('/login', create_page.login);
app.get('/flats', create_page.flats);

app.post('/register', user_middleware.information_availibility, users.create_user);
app.get('/users', users.find_all_users);
app.get('/users/:idUser',user_middleware.user_aviilability, users.find_by_id);
app.post('/login',user_middleware.user_aviilability, users.login);

app.post('/flat', flat_middleware.information_availibility, flats.create_flat);
app.get('/flats/:idFlat', flat_middleware.flat_aviilability, flats.find_flat_by_id);
app.get('/flats', flats.find_all_flats);

app.all('*', async (req, res)=> {
    res.status(505).json(`User is not found`);
});

app.listen(3000, () => {
    console.log("okey")
});