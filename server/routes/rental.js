const express = require('express');
const routes = express.Router();
const model = require('../model/model');
const booking = require('../model/booking');


routes.get('', (req, res)=>{
    model.find({}, (err, rental)=>{
      res.json(rental);
    });
});

routes.get('/:id',(req,res)=>{
  const rentalId = req.params.id;
  model.findById(rentalId,(err, rental)=>{
    if(rental){
      booking.find({rental: rental._id}).then(booking =>{
            rental.bookings = booking;
            res.json(rental);
      }
      // rental.bookings=booking
    
      )}
    
  })
})


module.exports = routes;
