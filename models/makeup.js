'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MakeuplistSchema = Schema({
    name: String,
    price: Number,
    photo: String
})

module.exports = mongoose.model('Makeup', MakeuplistSchema, 'MakeupList')