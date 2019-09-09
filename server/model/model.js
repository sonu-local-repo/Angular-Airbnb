const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


const rentalSchema = new Schema({
  title: {type:String, required: true},
  city: {type: String, required: true},
  street : {type: String, required: true},
  category: {type: String, required: true},
  image: {type: String, required: true},
  bedrooms: {type: Number, required: true},
  shared: {type: Number, required: true},
  description: {type: String, required: true},
  dailyRate: {type: Number, required: true},
  createdAt: {type: Date, required: true, default: Date.now}
  ,
  bookings: [{type: Schema.Types.ObjectId, ref:'Booking'}] 
});



module.exports = mongoose.model('Rental', rentalSchema);
