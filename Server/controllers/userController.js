"use strict";

const Models = require("../models/index");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const helper = require("../helpers/validationJoi");
const jwt = require("jsonwebtoken");
const commonHelper = require("../helpers/commonHelper");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const Response = require("../helpers/response");
const secretKey = "secretKey";

module.exports = {



signUp: async (req, res) => {
  try {
      console.log("req.body", req.body);

      const schema = Joi.object({
          name: Joi.string().required(),
          userName: Joi.string().required(),
          phoneNumber: Joi.string().required(),
          countryCode: Joi.string().optional(),
          email: Joi.string().email({ tlds: { allow: false } }).required(),
          password: Joi.string().min(6).required(),
          deviceToken: Joi.string().optional()
      });

      let payload = await helper.validationJoi(req.body, schema);
      if (!payload) {
          return res.status(400).json({ message: "Invalid request data" });
      }

      // Ensure proper phone number processing
      let phoneNumber = payload.phoneNumber || ""; 
      let countryParts = phoneNumber.split(" "); 
      let country = countryParts[0] || "IN";  // Default country code
      let phone = countryParts[1] || phoneNumber;  // Use original if no space

      let userExist = await Models.user.findOne({ where: { email: payload.email } });
      if (userExist) {
          return res.status(400).json({ msg: "User already exists with the same email" });
      }

      const hashedPassword = await bcrypt.hash(payload.password, 10);

      let newUser = await Models.user.create({
          name: payload.name,
          userName: payload.userName,
          phoneNumber: phone,
          countryCode: country,
          email: payload.email,
          password: hashedPassword
      });

      console.log("New User Created:", newUser);
      return res.status(201).json({ msg: "User registered successfully", user: newUser });

  } catch (error) {
      console.error("Signup error:", error);
      return res.status(500).json({ msg: "Internal server error", error: error.message });
  }
},

otpVerify:async(req,res)=>{
  try {
      const schema = Joi.object({
          phoneNumber: Joi.string().required(),
          countrycode: Joi.string().required(),
          otp: Joi.string().required(),
      });
      let payload = await helper.validationJoi(req.body, schema);
      if (!payload) {
          return res.status(400).json({ message: "Invalid request data" });
      }
      let user=await Models.user.findOne({
          where:{
              countrycode:payload.countrycode,
              phoneNumber:payload.phoneNumber
          },raw:true
      })
      if(payload.otp!=1111){
       return res.status(400).json({ message: "Invalid otp" });
      }else{
          const token = jwt.sign(
              { id: user.id },
              secretKey,
              { expiresIn: "1h" }
          );
      user.token=token 
      return res.status(201).json({ msg: "User registered successfully", user: user });
      }

  } catch (error) {
      throw error
  }
},
  login: async (req, res) => {
    try {
      const schema = Joi.object({
        userDetail: Joi.string().required(),
        password: Joi.string().required(),
        deviceToken: Joi.string().optional(),
      });

      let payload = await helper.validationJoi(req.body, schema);
      if (!payload) {
        return res.status(400).json({ message: "Invalid request data" });
      }

      const { userDetail, password } = payload;
      const isEmail = userDetail.includes("@");
      const user = await Models.user.findOne({
        where: isEmail ? { email: userDetail } : { userName: userDetail },
      });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials." });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials." });
      }
      const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
        expiresIn: "1h",
      });
      return res.status(200).json({
        message: "Login successful.",
        user: { ...user.toJSON(), token },
      });
    } catch (error) {
      console.error("Login Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  
 logout: async (req, res) => {
    try {
      console.log("req.body", req.user.id);
      const schema = Joi.object().keys({
        deviceToken: Joi.string().required().allow(""),
      });

      const { error, value } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }

      let logoutDetail = { deviceToken: value.deviceToken };

      await Models.user.update(logoutDetail, {
        where: { id: req.user.id },
      });

      res.json({ message: "User logged out successfully!" });
    } catch (error) {
      console.error("Logout API Error:", error);
      res.status(500).json({ message: "Something went wrong!" });
    }
  },

  forgotPassword: async (req, res) => {
    try {
      const schema = Joi.object({
        email: Joi.string().email().required(),
      });

      let payload = await helper.validationJoi(req.body, schema);
      const { email } = payload;

      const user = await Models.user.findOne({
        where: { email: email },
      });

      if (!user) {
        return commonHelper.error(res, Response.failed_msg.noAccWEmail);
      }

      const resetToken = crypto.randomBytes(32).toString("hex");
      const resetTokenExpires = new Date(Date.now() + 3600000); // 1 hour expiry

      await Models.user.update(
        
          {resetToken,resetTokenExpires},
          { where: { email: email } }

      
      );

      const resetLink = `${req.protocol}://${req.headers.host}/users/resetPassword?token=${resetToken}`;

      const transporter = await commonHelper.nodeMailer();
      const emailTemplate = await commonHelper.forgetPasswordLinkHTML(
        req,
        user,
        resetLink,
        "Reset Password",
        "forgotPassword"
      );

      await transporter.sendMail(emailTemplate);

      return commonHelper.success(
        res,
        "Password reset link sent successfully!"
      );
    } catch (error) {
      console.error("Forgot password error:", error);

      return commonHelper.error(
        res,
        Response.error_msg?.forgPwdErr || "Forgot password error",
        error.message
      );
    }
  },

  resetPassword: async (req, res) => {
    try {
      const { token } = req.query;
      console.log("token token", token);
      if (!token) {
        return res
          .status(400)
          .json({ success: false, message: "Token is required" });
      }
      const user = await Models.user.findOne({
        where: { resetToken: token },
        raw: true,
      });
      console.log("user user user", user);
      if (!user || user.resetTokenExpires < new Date()) {
        return res.render("sessionExpire");
      }
      return res.render("changePassword", { data: user });
    } catch (error) {
      console.error("Reset password error:", error);
      return commonHelper.error(
        res,
        Response.error_msg.resetPwdErr,
        error.message
      );
    }
  },

  changePassword: async (req, res) => {
    try {
      console.log("req.body", req.body);
      // return
      const schema = Joi.object({
        newPassword: Joi.string().min(6).required(),
        confirmPassword: Joi.string()
          .valid(Joi.ref("newPassword"))
          .required()
          .messages({ "any.only": "Passwords do not match" }),
      }).unknown(true);

      const { error, value } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }

      const { newPassword } = value;

      // Hash new password and update
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await Models.user.update(
        { password: hashedPassword },
        { where: { id: req.body.id } }
      );
      res.render("successPassword");

      // return res.status(200).json({ message: "Password reset successfully!" });
    } catch (err) {
      console.error("Error during password reset:", err);
      return res
        .status(500)
        .json({ message: "Server error", error: err.message });
    }
  },
};
