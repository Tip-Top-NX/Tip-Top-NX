const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    contents:[{
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        },
        size:String,
        color:String
    }],
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    orderDate:{
        type:Date,
        default:Date.now
    },
    deliveryDate:{
        type:Date,
    },
    payment:{
        method:{
            type:String,
            required:true
        },
        transactionid:{
            type:String,
            required:true
        }
    }
},{
    timestamps:true
});

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;