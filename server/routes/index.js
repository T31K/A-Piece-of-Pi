const express = require('express')
const mongoose = require('mongoose')
const Blogpost = require('../models/blogpost')
const router = express.Router()

/* GET home page. */


// router.get("/:id" , (req, res, next) => {
//   Blogpost.findById(req.params.id, (err, foundBlogpost) => {
//     if (err){
//       console.log(err)
//     } else {
//       console.log("found bltpost")
//       console.log(foundBlogpost)
//       res.json(foundBlogpost)
//     }
//   })
// })
module.exports = router;
