

const userController = {};

userController.createUser = (req, res, next) => {
  const query = req.body; // email, password
  return next();
};

userController.verifyUser = (req, res, next) => {
  const query = req.body; // email, password
  return next();
};

userController.resetPassword = (req, res, next) => {
  const query = req.body; // email, password
  return next();
};

userController.deleteUser = (req, res, next) => {
  const query = req.body; // email, password
  return next();
};

module.exports = userController;