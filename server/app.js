// Dependencies Imports
const app = express();
const express = require('express');

// Misc
const path = require("path");
const logger = require('morgan');
const env = require('dotenv').config()
const cors = require('cors')
app.use(cors());

// BodyParser Configs
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Passport  Configs
const passport = require('passport')
app.use(passport.initialize());
require('./middleware/passport')(passport);

// View Engine Configs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Mongoose Configs
const mongoose = require('mongoose');
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
app.use('/api/users/', require("./routes/api/users"));
app.use('/api/posts/', require("./routes/api/posts"));


module.exports = app;