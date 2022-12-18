const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const app = express();



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const APP_PORT = 3000
app.listen(APP_PORT, () => {
    console.log('Servidor corriendo en puerto ' + APP_PORT);
});

const indexRouter = require('./routes/index')
const productRoute =require('./routes/productRoute')
const userRoute = require('./routes/userRoute')

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(session({secret: "Nuestro mensaje secreto"}));



app.use('/',indexRouter);
app.use('/products', productRoute);
app.use('/user', userRoute);
app.use(methodOverride('_method')); 
