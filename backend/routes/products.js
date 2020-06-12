const express = require('express');
const Product = require('../models/product');
const User = require('../models/user');
const authenticate = require('../utils/authenticate');

const router = express.Router();

router.route('/')
    .post((req, res, next) => {
        Product.create({
            ...req.body
        })
        .then((prod) => {
            return Product.findById(prod._id).populate('category','name')
        })
        .then((prod) => res.send(prod))
        .catch((err) => next(err));
    })

router.post('/:prodId/wishlist',authenticate.verifyUser,(req,res,next) => {
    User.findById(req.user._id)
    .then((user) => {
        user.wishlist.push(req.params.prodId);
        user.save()
        .then((user) => {
            res.send(user);
        })
    })
    .catch((err) => next(err));
})

router.post('/:prodId/cart',authenticate.verifyUser,(req,res,next) => {
    User.findById(req.user._id)
    .then((user) => {
        user.cart.push({
            product:req.params.prodId,
            size:req.body.size,
            color:req.body.color
        });
        user.save()
        .then((user) => {
            res.send(user);
        })
    })
    .catch((err) => next(err));
})

module.exports = router;