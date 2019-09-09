const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  startAt: {type: Date},
  endAt:{ type: Date},
  totalPrice: Number,
  days: Number,
  guests: Number,
  createdAt: {type: Date, required: true, default: Date.now},
  status: {type:String, default: "Booked"},
  user:{type:Schema.Types.ObjectId, ref: 'User'},
  rental:{type: Schema.Types.ObjectId, ref: 'Rental'}
});

module.exports = mongoose.model('Booking', bookingSchema);
