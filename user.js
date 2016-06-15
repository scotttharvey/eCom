var mongoose = require('mongoose')
var Schema = mongoose.Schema;

    var cart = require('./cart')

var schema = new Schema({
    name: {
        type: String,
    },
    username:{
        type: String,
        required: true
    },
    cart: [cart],
})

module.exports = mongoose.model('User', schema)
