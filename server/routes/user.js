const express = require('express');
const routes = express.Router();

const userModel = require('../model/user');
const userController = require('../controllers/user');

routes.post('/register', userController.userLogin);

module.exports = routes;