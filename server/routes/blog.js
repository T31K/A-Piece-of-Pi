const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Blogpost = require('../models/blogpost')

/* GET blogs listing. */
router.get('/', (req, res, next) => {
<<<<<<< HEAD
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
=======
  res.send("test from Express")
});


router.get("/:id" , (req, res, next) => {
  Blogpost.findById(req.params.id).exec( (err, foundBlogpost) => {
    if (err){
      console.log(err)
    } else {
      console.log("found bltpost")
      res.send("hello")
>>>>>>> 6bb63c3a665e975dc81f54a59ea476800e25cf45
    }
  })
})
module.exports = router;
