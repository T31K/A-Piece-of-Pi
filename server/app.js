
const env = require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
<<<<<<< HEAD
const usersRouter = require('./routes/blog');
=======
const usersRouter = require('./routes/users');
>>>>>>> 6f3fe7df2b446aec1099ee00360531e1acac5de0

const app = express();
const cors = require('cors')
app.use(cors());
// View Engine COnfig
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Mongoose Config
mongoose.connect(process.env.db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("Connected to DB"))
.catch(error => console.log(error.message));
const Blogpost = require("./models/blogpost")
const User = require("./models/user")
const Comment = require("./models/comment")

// Routers
app.use('/', indexRouter);
<<<<<<< HEAD
app.use('/blog', blogRouter);
=======
app.use('/users', usersRouter);
>>>>>>> 6f3fe7df2b446aec1099ee00360531e1acac5de0

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// const data = {
//     title: "Hello, world",
//     image: "test img",
//     description: "seeding database..",
// }

// Blogpost.create(data, (err) => {
//   if (err){
//     console.log(err)
// }})

module.exports = app;
