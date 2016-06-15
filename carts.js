var mongoose = require("mongoose")
var Schema = mongoose.Schema;
var cartSchema = new Schema({
    products: {
            type: String,
            ref: 'Products',
    }
})
module.exports = cartSchema;
