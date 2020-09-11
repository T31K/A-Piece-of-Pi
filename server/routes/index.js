var express = require('express')
const mongoose = require('mongoose')
const Blogpost = require('../models/blogpost')
var router = express.Router()
const id_number = '5f573541ecd61e0b12dd174c'
/* GET home page. */
router.get('/', (req, res, next) => {
  Blogpost.find((err, blogpost) => {
    res.json(blogpost)
<<<<<<< HEAD
    // console.log(blogpost)
=======
    console.log(blogpost)
>>>>>>> 6f3fe7df2b446aec1099ee00360531e1acac5de0
  })
});

module.exports = router;
