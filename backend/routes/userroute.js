//1.signup ==>post
//2.login ==>post
//3.otpvalidation ==>post
//4.forgotpassword ==>post
//5.ValidOtp ==>post
//6.getuser/:id ==>get

const express = require("express");
const UserSignup = require("../controllers/userControllers/UserSignup");
const router = express.Router();

router.post("/signup", UserSignup);
// router.post('/login',UserLogin);
// router.post('/otpvalidation',OtpValidation);
// router.post('/forgotpassword',ForgotPassword);
// router.post('/validOtp',ValidOtp);
// router.get('/getuser/:id',GetUserById);

module.exports = router;
