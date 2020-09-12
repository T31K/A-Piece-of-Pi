const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Blogpost = require('../models/blogpost')

/* GET blogs listing. */
router.get('/', (req, res, next) => {
  res.send("test from Express")
});


router.get("/:id" , (req, res, next) => {
  Blogpost.findById(req.params.id).exec( (err, foundBlogpost) => {
    if (err){
      console.log(err)
    } else {
      console.log("found bltpost")
      res.send("hello")
    }
  })
})
module.exports = router;
