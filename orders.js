var mongoose = require('mongoose')
Schema = mongoose.Schema

var schema = new Schema({
    user: {
        type: String,
        ref: 'User',
        required: true
    },
    products: [products]
    // ordered: {
    //     type: Date,
    //     default: new Date()
    // }
})

module.exports = mongoose.model('Order', schema)
