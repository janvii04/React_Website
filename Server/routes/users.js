var express = require('express');
const controllers = require('../controllers');
const  verifyToken  = require('../middlewares/verifyToken').verifyToken;
var router = express.Router();

router.post('/signUp', controllers.userController.signUp)
router.post('/login', controllers.userController.login)
router.post('/logout', verifyToken, controllers.userController.logout)
router.post('/forgotPassword', controllers.userController.forgotPassword)
// router.post('/resendForgotPasswordLink', controllers.userController.resendForgotPasswordLink)
router.get('/resetPassword', controllers.userController.resetPassword)
router.post("/changePassword",controllers.userController.changePassword)

module.exports = router;
