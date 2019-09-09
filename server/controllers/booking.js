const moment = require('moment');

const bookingModel = require('../model/booking');
const rental = require('../model/model');

exports.rentalbooking = (req,res)=>{
    let isBooked = null;
    const {startAt, endAt, totalPrice, guests,rentalId } = req.body;
    let startDt =moment(new Date(startAt));
    let endDt = moment(new Date(endAt));
    let days = endDt.diff(startDt,'days');
    const totalRent = days * totalPrice;

    if(endDt.isBefore(startDt)){
        return res.status(422).send({title:"Booking Error" ,details:"Start date must be before end date"});
    }
    if(days === 0){
        return res.status(422).send({title:"Booking Error" ,details:"Start date must not be same as end date"});
    }
   
   bookingModel.find({rental: rentalId,  startAt:  {$gte: startDt}})
    .then(result => {
            if(isValidBooking(startDt,endDt, result))   {
                let newBooking = new bookingModel({
                        startDt: startDt, endAt: endDt, totalPrice: totalRent, days: days, guests: guests, rental: rentalId});
                    newBooking.save((error, status)  => console.log(status));
                    return res.send({"Booked": "true"})
            } else {
                return res.status(422).send({title:"Booking Error" ,details:"Room is not available for these dates"});
            }        
        });
 
    if(this.isBooked === true){
        return res.status(422).send({title:"Booking Error" ,details:"Room is not available for these dates"});
    }
  }

    function isValidBooking(startDt,endDt, existingBookins) {

      existingBookins.every(element=>{
          if(moment(element.startAt).isBetween(startDt, endDt) || 
                moment(element.startAt).isSame(startDt) || moment(element.endAt).isSame(endDt) ){
                    return true;
                    
            }
      })
      
  }