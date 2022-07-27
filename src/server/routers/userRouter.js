const userController = require('../controllers/userController.js');
const { userRouter } = require('../server.js')
//  userRouter to divert requests to diff pages
// post? /login; post /signup; post /reset; get /logout; delete account

userRouter.post('/signup', userController.createUser, (req, res) => res.redirect(200, '/login')); //front end: display signup page, after user clicks the butto, fire the event, backend save and redirect

userRouter.post('/login', userController.verifyUser, (req, res) => res.redirect(200, '../welcome.html'));

userRouter.patch('/reset', userController.resetPassword, (req, res) => res.redirect(200, '/login'));

userRouter.get('/logout', (req, res, next) => {
  try {
    res.redirect(200, '../welcome.html') // redirect to static page
  } catch (err) { next({ message: 'logout request error' }) };
});

userRouter.delete('/delete', userController.deleteUser, (req, res) => res.redirect(200, '/signup'));