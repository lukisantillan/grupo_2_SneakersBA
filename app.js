const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve('public');

app.use(express.static(publicPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const APP_PORT = 3000
app.listen(APP_PORT, () => {
    console.log('Servidor corriendo en puerto ' + APP_PORT);
});

var indexRouter = require('./routes/index')
var loginRouter = require('./routes/login')
var productCartRouter = require('./routes/productCart')
var productDetailRouter = require('./routes/productDetail')
var registerRouter = require('./routes/register')

app.use ('/',indexRouter);
app.use ('/login',loginRouter);
app.use ('/productCart',productCartRouter);
app.use ('/productDetail',productDetailRouter);
app.use ('/register',registerRouter);


