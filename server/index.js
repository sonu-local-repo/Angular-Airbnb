const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const DB_URI = require('./dbcredentials');
const rentalModel = require('./model/model');
const fakeDB = require('./model/fakedb');
const rentalRoutes = require('./routes/rental');
const userRoutes = require('./routes/user');
const bookingRoutes = require('./routes/booking');

mongoose.connect(DB_URI.DB_URI).then(()=>{
  //  new fakeDB().saveDB();
});
const app = express();
app.use(bodyParser.json());

app.use('/app/v1/rentals', rentalRoutes);
app.use('/app/v1/user', userRoutes);
app.use('/app/v1/booking', bookingRoutes)

app.listen(3001, ()=>{
  console.log("Application is running in port 3001")
})
