const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Blogpost = require('../models/blogpost')

/* GET blogs listing. */
router.get('/', (req, res, next) => {
  Blogpost.find((err, blogpost) => {
    res.json(blogpost)
    console.log(blogpost)
  })
});

router.get("/:id" , (req, res, next) => {
  Blogpost.findById(req.params.id).exec( (err, foundBlogpost) => {
    if (err){
      res.send("404 not found")
    } else {
      res.json(foundBlogpost)
    }
  })
})
module.exports = router;
