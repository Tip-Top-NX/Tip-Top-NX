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

router.route('/:prodId/wishlist')
    .post(authenticate.verifyUser, (req, res, next) => {
        User.findByIdAndUpdate(req.user._id,
            { $push: { wishlist: req.params.prodId } },
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
        User.findById(req.user._id)
            .then((user) => {
                user.cart.push({
                    product: req.params.prodId,
                    size: req.body.size,
                    color: req.body.color
                });
                user.save()
                    .then((user) => {
                        res.send({ cart: user.cart });
                    })
            })
            .catch((err) => next(err));
    })
    .delete(authenticate.verifyUser, (req, res, next) => {
        User.findById(req.user._id)
            .then((user) => {
                let i = 0
                for (i = 0; i < user.cart.length; i++) {
                    if (user.cart[i].product == req.params.prodId) {
                        break;
                    }
                }
                user.cart.splice(i, 1);
                user.save()
                    .then((user) => {
                        res.send({ cart: user.cart });
                    })
            })
            .catch((err) => next(err));
    })

module.exports = router;