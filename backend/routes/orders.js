var express = require('express');
var router = express.Router();

router.get('/',(req,res,next) => {
    console.log('allowed');
    res.send({success:true});
})

module.exports = router;