const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
    name : String ,
    departament :  String ,
    price : Number
});

module.exports = mongoose.model("Product",productSchema);