// Dependencies Imports
const env = require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const logger = require('morgan');
const bodyParser = require("body-parser");
const cors = require('cors')
const passport = require('passport')

// Express Configs
const app = express();
// app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Passport  Configs
app.use(passport.initialize());
require('./middleware/passport')(passport);

// View Engine Configs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Mongoose Config
mongoose.connect(process.env.db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("Connected to DB"))
.catch(error => console.log(error.message));

// Error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render Error Page
  res.status(err.status || 500);
  res.render('error');
});

// Router Configs
// const blogRouter = require('./routes/api/post');
// app.use('/blog', blogRouter);
app.use('/api/users/', require("./routes/api/users"));
app.use('/api/posts/', require("./routes/api/posts"));
// const Blogpost = require('./models/Post')



module.exports = app;