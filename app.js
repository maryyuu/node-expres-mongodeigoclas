'use strict'
const makeuplist_routes = require('./routers/makeup.js');
const category_routes = require('./routers/category.js')
const express = require('express');


const app = express();

app.set('port', process.env.PORT || 3000)

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// // routes
app.use('/api/makeup', makeuplist_routes);
app.use('/api/makeup/category', category_routes);
//localhost:3000/api/makeup/
module.exports = app
