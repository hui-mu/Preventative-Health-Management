const healthController = require('../controllers/healthController.js');
const express = require('express');
const Member = require('../dbModel.js')
const healthRouter = express.Router();

// healthRouter to divert requests to diff pages: 
/*
1. api from CDC available: MyHealthfinder API
no need interacting with db, simply get data for the front end.
 */
// post age gender and get healthinfo from API ; 

// healthRouter.get()

// front end can talk to api directly
healthRouter.get('/create', (req, res) => res.json("test!!!!!!!!"))
healthRouter.post('/create', (req, res, next) => {
  const {
    userEmail,
    memberId,
    name,
    gender,
    age,
    health } = req.body;
  console.log("body????????", req.body)
  const member = new Member(req.body);
  member.save((err, doc) => {
    console.log('doc???????', doc);
    if (!err) res.status(200).send('can you see me succeed'); // ??? i can add the same again and again?
    else return next({ message: 'err in create a member' });
  });

})

module.exports = healthRouter;