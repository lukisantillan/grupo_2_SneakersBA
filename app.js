const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve('public');
app.use(express.static(publicPath));

const APP_PORT = 1200
app.listen(APP_PORT, () => {
    console.log('Servidor corriendo en puerto' + APP_PORT);
});