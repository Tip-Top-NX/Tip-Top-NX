const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    address:[String],
    image:{
        type:String,
        default:''
    },
    points:{
        type:Number,
        default:0
    },
    orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Order'
    }],
    wishlist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }],
    cart:[{
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        },
        size:String,
        color:String
    }]
})
userSchema.plugin(passportLocalMongoose,{usernameField:'email'});

const User = mongoose.model('User',userSchema);
module.exports = User;