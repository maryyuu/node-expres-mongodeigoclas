'use strict'
let mongoose = require('mongoose');
const app = require('./app.js');


mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/MAKEUP2')
    .then(() => {
        console.log('conexion a la base de datos');

        app.listen(app.get('port'), () => {
            console.log(`Servidor Funciona Correctamente en : ${app.get('port')}`)
    })
})
    .catch(err => console.log(err))