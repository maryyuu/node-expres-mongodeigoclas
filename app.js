'use strict'
const makeuplist_routes = require('./routers/makeup.js');
const category_routes = require('./routers/category.js')
const type_router = require('./routers/type.js')
const express = require('express');


const app = express();

app.set('port', process.env.PORT || 3000)

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// // routes
app.use('/api/makeup', makeuplist_routes);
app.use('/api/category', category_routes);
app.use('/api/type', type_router);

//localhost:3000/api/makeup/
module.exports = app
