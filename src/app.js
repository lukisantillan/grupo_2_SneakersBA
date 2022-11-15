const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve('./public');

app.use(express.static(publicPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const APP_PORT = 3000
app.listen(APP_PORT, () => {
    console.log('Servidor corriendo en puerto ' + APP_PORT);
});

const indexRouter = require('./routes/index')
const productRoute =require('./routes/productRoute')
const userRoute = require('./routes/userRoute')



app.use('/',indexRouter);
app.use('/product', productRoute);
app.use('/user', userRoute);
