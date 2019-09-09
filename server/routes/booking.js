const express = require('express');
const bookingController = require('../controllers/booking');

const Routes = express.Router();


Routes.post('',bookingController.rentalbooking)

module.exports = Routes;
