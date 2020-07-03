const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  points: {
    type: Number,
    default: 0,
  },
  orders: [
    {
      type: Number,
      ref: "Order",
    },
  ],
  wishlist: [
    {
      type: String,
      ref: "Product",
    },
  ],
  cart: [
    {
      product: {
        type: String,
        ref: "Product",
      },
      size: String,
      color: String,
      quantity: Number,
      price:Number
    },
<<<<<<< HEAD
    age: {
        type: Number,
    },
    points:{
        type:Number,
        default:0
    },
    orders:[{
        type:Number,
        ref:'Order'
    }],
    wishlist:[{
        type:String,
        ref:'Product'
    }],
    cart:[{
        product:{
            type:String,
            ref:'Product'
        },
        size:String,
        color:String,
        quantity:Number
    }],
    cartTotal:Number
})
userSchema.plugin(passportLocalMongoose,{usernameField:'email'});
=======
  ],
  cartTotal: Number,
});
userSchema.plugin(passportLocalMongoose, { usernameField: "email" });
>>>>>>> 591ddc4e8fcb4bf9fca194bd8015fb919838f325

const User = mongoose.model("User", userSchema);
module.exports = User;
