var express = require('express');
var router = express.Router();

const { upload, getURLSingle, getURLMultiple } = require('../utils/upload');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Example for file upload(single)
router.post('/uploadSingle', upload.single('myImage') ,(req, res, next) => {
  res.send(getURLSingle(req));
})

// Example for file upload(multiple)
router.post('/uploadMultiple', upload.array('myImages',3) ,(req, res, next) => {
  res.send(getURLMultiple(req));
})

module.exports = router;
