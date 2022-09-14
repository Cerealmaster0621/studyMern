const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places');

const app = express();

app.use(bodyParser.json());

app.use('/api/places',placesRoutes);

app.use((err, req, res, next) => {
    if(res.headerSent) return next(err);
    res.status(err.code || 500);
    res.send({message : err.message || "unknown error occured!"});
  });
  

app.listen(5000);