const healthController = require('../controllers/healthController.js');
const express = require('express');

const healthRouter = express.Router();

// healthRouter to divert requests to diff pages: 
/*
1. api from CDC available: MyHealthfinder API
no need interacting with db, simply get data for the front end.
 */
// post age gender and get healthinfo from API ; 

// healthRouter.get()

// front end can talk to api directly


module.exports = healthRouter;