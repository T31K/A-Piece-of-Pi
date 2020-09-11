var express = require('express')
const mongoose = require('mongoose')
const Blogpost = require('../models/blogpost')
var router = express.Router()
const id_number = '5f573541ecd61e0b12dd174c'
/* GET home page. */
router.get('/', (req, res, next) => {
  Blogpost.find((err, blogpost) => {
    res.json(blogpost)
    console.log(blogpost)
  })
});

module.exports = router;
