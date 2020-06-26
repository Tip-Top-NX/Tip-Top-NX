const express = require('express');
const Product = require('../models/product');
const User = require('../models/user');
const authenticate = require('../utils/authenticate');
const {upload} = require('../utils/upload');

const router = express.Router();

router.route('/')
    .post((req, res, next) => {
        Product.create({
            ...req.body
        })
            .then((prod) => {
                return Product.findById(prod._id).populate('category', 'name')
            })
            .then((prod) => res.send(prod))
            .catch((err) => next(err));
    })

router.get('/:prodId', (req, res, next) => {
    Product.findById(req.params.prodId)
        .then((product) => {
            res.send(product);
        })
        .catch((err) => next(err));
})

router.post('/search',(req, res, next) => {
    Product.find({$text: {$search: req.body.keyword}},{score: {$meta: "textScore"}}).sort({score: {$meta: "textScore"}})
        .then((prods) => res.send(prods))
        .catch((err) => next(err));
})

router.put('/:prodId', upload.array('myImages'), (req,res,next) => {
    Product.findById(req.params.prodId)
        .then((prod) => {
            req.files.forEach(file => {
                prod.images.push(file.path);
            });
            return prod.save();
        })
        .then((prod) => res.send(prod))
        .catch((err) => next(err));
})

router.route('/:prodId/wishlist')
    .post(authenticate.verifyUser, (req, res, next) => {
        User.findByIdAndUpdate(req.user._id,
            { $addToSet: { wishlist: req.params.prodId } },
            { safe: true, upsert: true, new: true }).populate('wishlist')
            .then((user) => res.send({ wishlist: user.wishlist }))
            .catch((err) => next(err));
    })
    .delete(authenticate.verifyUser, (req, res, next) => {
        User.findByIdAndUpdate(req.user._id,
            {$pull:{wishlist: req.params.prodId}},
            { safe: true, upsert: true, new: true}).populate('wishlist')
            .then((user) => res.send({wishlist: user.wishlist}))
            .catch((err) => next(err));
    })

router.route('/:prodId/cart')
    .post(authenticate.verifyUser, (req, res, next) => {
        User.findByIdAndUpdate(req.user._id,
            { $push: { cart : { product: req.params.prodId, color: req.body.color, size: req.body.size}}},
            { safe: true, upsert: true, new: true}).populate('cart.product')
            .then((user) => res.send({ cart: user.cart} ))
            .catch((err) => next(err));
    })
    .delete(authenticate.verifyUser, (req, res, next) => {
        User.findByIdAndUpdate(req.user._id,
            { $pull : {cart : {product:req.params.prodId}}},
            { safe: true, upsert:true, new:true}).populate('cart.product')
            .then((user) => res.send({ cart: user.cart} ))
            .catch((err) => next(err));
    })

module.exports = router;