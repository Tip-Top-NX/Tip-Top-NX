const express = require('express');
const User = require('../models/user');
const Order = require('../models/order');
const { upload, getURLSingle, getURLMultiple } = require('../utils/upload');

const router = express.Router();

router.get("/test", (req, res, next) => {
    console.log("entered");
    res.send("blah");
})


router.route('/')
    .get((req, res, next) => {    //send user details
        User.findById(req.user._id)
            .then((user) => {
                res.send({
                    user: user
                });
            })
            .catch((err) => next(err));
    })
    .put((req, res, next) => {    //update user
        User.findById(req.user._id)
            .then((user) => {
                if (req.body.name)
                    user.name = req.body.name;
                if (req.body.contact)
                    user.contact = req.body.contact;
                if (req.body.address)
                    user.address = req.body.address;
                if (req.body.gender)
                    user.gender = req.body.gender;
                if (req.body.age)
                    user.age = req.body.age;
                user.save()
                    .then((user) => {
                        res.send(({
                            user: user
                        }))
                    });
            })
            .catch((err) => next(err));
    })

router.post('/uploadPhoto', upload.single('myImage'), (req, res, next) => {
    User.findById(req.user._id)
        .then((user) => {
            user.image = getURLSingle(req);
            console.log("url", user.image);
            return user.save();
        })
        .then((user) => {
            res.send(({
                image: user.image,
            }));
        })
        .catch((err) => next(err));
})

router.get('/wishlist', (req, res, next) => {
    User.findById(req.user._id)
        .populate('wishlist')
        .then((user) => {
            res.send(user.wishlist);
        }, (err) => next(err))
        .catch((err) => next(err));
});

router.get('/cart', (req, res, next) => {
    User.findById(req.user._id)
        .populate('cart.product')
        .then((user) => {
            let totalCartValue = 0;
            for (let i = 0; i < user.cart.length; i++) {
                totalCartValue = totalCartValue + user.cart[i].product.price;
            }
            res.send({ cart: user.cart, total: totalCartValue });
        }, (err) => next(err))
        .catch((err) => next(err));
});

router.get('/orders', (req, res, next) => {
    User.findById(req.user._id)
        .populate('orders')
        .then((user) => {
            res.send(user.orders);
        }, (err) => next(err))
        .catch((err) => next(err));
})

router.get('/order/:orderId', (req, res, next) => {
    Order.findById(req.params.orderId)
        .populate('contents.product')
        .then((order) => {
            res.send(order);
        })
        .catch((err) => next(err));
})

//test only
router.post('/cart/placeOrder', (req, res, next) => {
    let conents = [];
    for (let i = 0; i < req.body.cart.length; i++) {
        conents.push({
            product: req.body.cart[i].product._id,
            size: req.body.cart[i].size,
            color: req.body.cart[i].color,
        });
    }
    Order.create({
        contents: conents,
        amount: req.body.total,
        status: "Placed",
        payment: {
            method: req.body.method,
            transactionid: 123
        }
    })
        .then((order) => {
            User.findById(req.user._id)
                .then((user) => {
                    user.orders.push(order._id);    //add to orders
                    user.cart = []                  //clear cart
                    user.save()
                        .then((user) => {
                            res.send(order);
                        })
                })
        })
        .catch((err) => next(err));
})


module.exports = router;