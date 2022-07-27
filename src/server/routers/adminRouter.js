const adminController = require('../controllers/adminController.js');
const { adminRouter } = require('../server.js')

// adminRouter to query for all enrollees: /user
// get /allusers /:username; post /createusers; patch /updateusers; delete /deleteuser

adminRouter.use('/admin', adminRouter);