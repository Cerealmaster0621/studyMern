const express = require('express');
const bodyParser = require('body-parser');
const httpError = require('./models/httpError');
const passport = require('passport');
const passportConfig = require('./passport');
const session = require("express-session");
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places');
const usersRoutes = require('./routes/users');

const app = express();
passportConfig();

app.use(bodyParser.json());

//mongoose
mongoose.connect("mongodb://localhost:27017/studyMern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Db connected");
});


//express-session
const sessionConfig = {
  secret: "secretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
      httpOnly: true,
      expires: date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000),
      maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};

app.use(session(sessionConfig));

//passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//passport
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/api/places',placesRoutes);
app.use('/api/users',usersRoutes);

//page not found error
app.use((req,res,next)=>{
    const newError = new httpError("couldn't find this route",404);
    throw newError;
})

//error handling in general
app.use((err, req, res, next) => {
    if(res.headerSent) return next(err);
    res.status(err.code || 500);
    res.send({message : err.message || "unknown error occured!"});
  });
  
app.listen(5000);