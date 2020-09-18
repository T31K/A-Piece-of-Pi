const router = require('express').Router()
const Blogpost = require('../models/blogpost')

// GET All blogs (/blog)
router.get('/', (req, res, next) => {
  Blogpost.find()
    .then(( blogposts) => res.json(blogposts))
    .catch( (err) => res.status(400).json("Error" + err));
})

// GET specific blogs (/blog/....)
router.get("/:id" , (req, res, next) => {
  Blogpost.findById(req.params.id)
      .then((blogposts => res.json(blogposts)))
      .catch( (err) => res.status(400).json("Error" + err))
})

module.exports = router;
