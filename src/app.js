const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const acceso = require('./middlewares/acceso');

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method')); 
app.use(cookies());
app.use(session({
    secret : 'TopSecret',
    resave : false,
    saveUninitialized :false
}));
app.use(cookies());
app.use(acceso);



const webRoutes = require('./routes/web');
const usuariosRoutes = require('./routes/usuariosRoutes');
const productoRoutes = require('./routes/producto');
const adminRoutes = require('./routes/admin');


app.use(webRoutes);
app.use(usuariosRoutes);
app.use(productoRoutes);
app.use(adminRoutes);


app.listen(3000, 'localhost', ()=> console.log('Servidor corriendo en el puerto 3000'));