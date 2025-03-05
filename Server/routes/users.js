var express = require('express');
var router = express.Router();
const passport = require('passport')
router.use(passport.initialize());
router.use(passport.session());
const controllers = require('../controllers');
const  verifyToken  = require('../middlewares/verifyToken').verifyToken;
 



router.post('/signUp', controllers.userController.signUp)
router.post('/otpVerify', controllers.userController.otpVerify)
router.post('/login', controllers.userController.login)
router.post('/logout', verifyToken, controllers.userController.logout)
router.post('/forgotPassword', controllers.userController.forgotPassword)
// router.post('/resendForgotPasswordLink', controllers.userController.resendForgotPasswordLink)
router.get('/resetPassword', controllers.userController.resetPassword)
router.post("/changePassword",controllers.userController.changePassword)
router.get('/loadAuth', controllers.userController.loadAuth)



router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }))
//Auth callback
router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/success',
    failureRedirect: '/failure'
}));
//Success
router.get('/success', controllers.userController.successGoogleLogin);
//Failure
router.get('/failure',controllers.userController.failureGoogleLogin)

module.exports = router;
