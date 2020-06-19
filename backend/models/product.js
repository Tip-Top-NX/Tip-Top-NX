const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        default:''
    },
    category:{
        type:Number,
        ref:'Category'
    },
    style:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:''
    },
    price:{
        type:Number,
        required:true
    },
    discountPercentage:{
        type:Number,
        default:0
    },
    images:[String],
    colors:[String],
    size:[String],
});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;