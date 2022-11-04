const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve('public');

app.use(express.static(publicPath));

app.set('view engine', 'ejs');

const APP_PORT = 3000
app.listen(APP_PORT, () => {
    console.log('Servidor corriendo en puerto ' + APP_PORT);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/register.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/login.html'))
});

app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/home.html'))
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/login.html'));
});

app.get('/productCar', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/productCart.html'))
});

app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/productDetail.html'))
});