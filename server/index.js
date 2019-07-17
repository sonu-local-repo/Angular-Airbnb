const express = require('express');
const mongoose = require('mongoose');
const DB_URI = require('./dbcredentials');
const rentalModel = require('./model/model');
const fakeDB = require('./model/fakedb');
const rentalRoutes = require('./routes/rental');

mongoose.connect(DB_URI.DB_URI).then(()=>{
  //  new fakeDB().saveDB();
});
const app = express();

app.use('/app/v1/rentals', rentalRoutes);

app.listen(3001, ()=>{
  console.log("Application is running in port 3001")
})
