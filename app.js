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

const http = require('http').createServer(app);

const io = require('socket.io')(http);

io.on('connection', socket => {
    socket.on('massage', data => {
        console.log(data);
        io.emit('resp', {id: socket.id, data});
    })

    socket.on('disconnect', data => {
        io.emit('disconnect', {id: socket.id, data});
    })

    socket.on('joinRoom', data => {
        socket.join(data.room_id);
        console.log(data);
        return data.room_id
    })

    socket.on('msg', data => {
        console.log(data);
        io.to(data.room_id).emit('msg_resp', {id: socket.id, data})
    })
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHend({
    extname: '.hbs',
    defaultLayout: null
}))


let { create_page } = require('./controllers');
let { users_router, flats_router, auth_router } = require('./router');

app.get('/', create_page.homepage);

app.use('/users', users_router);
app.use('/flats', flats_router);
app.use('/auth', auth_router);
app.get('/support', (req, res) => {
    res.render('massage')
});

app.all('*', async (req, res)=> {
    res.status(505).json(`User is not found`);
});

http.listen(3000, () => {
    console.log("3000")
});