const express = require('express');
const User = require('../models/user');
const { upload, getURLSingle, getURLMultiple } = require('../utils/upload');

const router = express.Router();

router.route('/')
.get((req,res,next) => {    //send user details
    User.findById(req.user._id)
    .then((user) => {
        res.send({
            user:user
        });
    })
    .catch((err) => next(err));
})
.put((req,res,next) => {    //update user
    User.findById(req.user._id)
    .then((user) => {
        if(req.body.name)
            user.name = req.body.name;
        if(req.body.contact)
            user.contact = req.body.contact;
        if(req.body.address)
            user.address = req.body.address;
        user.save()
        .then((user)=>{
            res.send(({
                user:user
            }))
        });
    })
    .catch((err) => next(err));
})

router.post('/uploadPhoto', upload.single('myImage') ,(req, res, next) => {
    User.findById(req.user._id)
    .then((user) => {
        user.image = getURLSingle(req);
        user.save()
        .then((user)=>{
            res.send(({
                user:user
            }))
        });
    })
    .catch((err) => next(err));
})

module.exports = router;