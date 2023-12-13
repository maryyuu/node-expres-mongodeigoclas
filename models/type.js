'use strict'
const mongoose = require ('mongoose')
const Schema = mongoose.Schema

let TypeSchema = Schema({
    name: String
})
module.exports= mongoose.model('Type',TypeSchema,'projects')