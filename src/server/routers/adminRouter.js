const adminController = require('../controllers/adminController.js');
const express = require('express');

const adminRouter = express.Router();
// adminRouter to query for all enrollees: /user
// get /allusers /:username; post /createusers; patch /updateusers; delete /deleteuser

adminRouter.use('/admin', adminRouter);



module.exports = adminRouter;