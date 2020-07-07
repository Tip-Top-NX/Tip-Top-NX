const express = require('express');
const Product = require('../models/product');
const User = require('../models/user');
const Order = require('../models/order');
const authenticate = require('../utils/authenticate');
const {upload} = require('../utils/upload');

const router = express.Router();

router.get("/",(req,res,next) => {
    res.send({admin:true});
})

//all about orders
router.get("/orders",(req,res,next) => {
        Order.find().sort({_id:-1})
        .then((orders) => {
            res.send(orders);
        })
    })

router.route("/orders/:orderId")
    .get((req,res,next) => {
        Order.findById(req.params.orderId).populate('contents.product')
        .then((order) => {
            res.send(order);
        })
    })
    .put((req,res,next) => {
        Order.findByIdAndUpdate(req.params.orderId,
            { $set : {status : req.body.status}},
            { safe: true, upsert:true, new:true})
            .populate('contents.product')
            .then((order) => {
                res.send(order)
            })
    })
    .delete((req,res,next) => {
        Order.findByIdAndDelete(req.params.orderId)
            .then((order) => {
                res.send(order)
            })
    })

router.get("/orders/placed",(req,res,next) => {
    Order.find({status : "Placed"}).sort({_id:-1})
    .then((orders) => {
        res.send(orders);
    })
})

router.get("/orders/completed",(req,res,next) => {
    Order.find({status : "Completed"}).sort({_id:-1})
    .then((orders) => {
        res.send(orders);
    })
})

//all about products
router.route("/products")
    .post((req,res,next) => {
        Product.create({
            ...req.body
        })
        .then((prod) => {
            return Product.findById(prod._id)
        })
        .then((prod) => res.send(prod))
        .catch((err) => next(err));
    })

router.route("/products/:productId")
    .get((req,res,next) => {
        Product.findById(req.params.productId)
        .then((product) => {
            res.send(product)
        })
    })
    .put((req,res,next) => {
        Product.findByIdAndUpdate(req.params.productId,
            { $set : req.body},
            { safe: true, upsert:true, new:true})
            .then((product) => {
                res.send(product)
            })
    })
    .delete((req,res,next) => {
        Product.findByIdAndDelete(req.params.productId)
        .then((product) => {
            res.send(product)
        })
    })

module.exports = router;