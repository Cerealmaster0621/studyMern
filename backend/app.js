const express = require('express');
const bodyParser = require('body-parser');
const httpError = require('./models/httpError');

const placesRoutes = require('./routes/places');

const app = express();

app.use(bodyParser.json());

app.use('/api/places',placesRoutes);

app.use((req,res,next)=>{
    const newError = new httpError("couldn't find this route",404);
    throw newError;
})

app.use((err, req, res, next) => {
    if(res.headerSent) return next(err);
    res.status(err.code || 500);
    res.send({message : err.message || "unknown error occured!"});
  });
  
app.listen(5000);