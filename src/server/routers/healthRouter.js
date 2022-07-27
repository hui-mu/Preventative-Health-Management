const healthController = require('../controllers/healthController.js');
const { healthRouter } = require('../server.js')

// healthRouter to divert requests to diff pages: 
/*
1. api from CDC available: MyHealthfinder API
no need interacting with db, simply get data for the front end.
 */
// post age gender and get healthinfo from API ; 

// healthRouter.get()

// front end can talk to api directly