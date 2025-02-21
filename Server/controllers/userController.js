"use strict";

const Models = require("../models/index");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const helper = require("../helpers/validationJoi");
const jwt = require("jsonwebtoken");
const commonHelper =require("../helpers/commonHelper")
const nodemailer = require("nodemailer");
const crypto = require("crypto")
const Response= require("../helpers/response")

module.exports = {

  // getData:async(req,res)=>{
  //   try {
  //     return res.json({user:"Hello"})
  //   } catch (error) {
  //     throw error
  //   }
  // },

  signUp: async (req, res) => {
    try {
      const schema = Joi.object({
        name: Joi.string().required(),
        userName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
      });
      let payload = await helper.validationJoi(req.body, schema);
      if (!payload) {
        return res.status(400).json({ message: "Invalid request data" });
      }
      let userExist = await Models.user.findOne({
        where: { email: payload.email },
      });
      if (userExist) {
        return res
          .status(400)
          .json({ msg: "User already exists with the same email" });
      }
      const hashedPassword = await bcrypt.hash(payload.password, 10);
      let newUser = await Models.user.create({
        name: payload.name,
        userName: payload.userName,
        email: payload.email,
        password: hashedPassword,
      });
      return res
        .status(201)
        .json({ msg: "User registered successfully", user: newUser });
    } catch (error) {
      throw error;
    }
  },

  login: async (req, res) => {
    try {
      const schema = Joi.object({
        search: Joi.string().required(),
        password: Joi.string().required(),
        deviceToken: "abc",
      });
      let payload = await helper.validationJoi(req.body, schema);
      if (!payload) {
        return res.status(400).json({ message: "Invalid request data" });
      }
      const { search, password } = payload;
      const user = await Models.user.findOne({
        $or: [{ email: search }, { userName: search }],
      });
      if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
          email: search.includes("@") ? search : null,
          userName: search.includes("@") ? null : search,
          password: hashedPassword,
        };
        const response = await Models.user.create(newUser);
        return res.status(201).json({
          message: `User created successfully.`,
          user: response,
        });
      }
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      user.dataValues.token = token;
      return res.status(200).json({
        message: "Login successful.",
        user,
      });
    } catch (error) {
      throw error;
    }
  },

  logout: async (req, res) => {
    try {
      console.log("User making logout request:", req.user); // Debugging

      if (!req.user) {
        return res.status(403).json({ message: "Unauthorized request!" });
      }

      const schema = Joi.object().keys({
        deviceToken: Joi.string().required().allow(""),
      });

      const { error, value } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }

      let logoutDetail = {
        deviceToken: value.deviceToken,
      };

      await Models.user.update(logoutDetail, {
        where: { id: req.user.id },
      });

      res.json({ message: "User logout successfully!" });
    } catch (error) {
      console.error("Logout error:", error);
      res.status(500).json({ message: "Internal server error" });
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
            where: { email:email },
        });

        if (!user) {
            return commonHelper.failed(res, Response.failed_msg.noAccWEmail);
        }

        const resetToken = crypto.randomBytes(32).toString("hex");
        const resetTokenExpires = new Date(Date.now() + 3600000); // 1 hour expiry

        await Models.user.update(
            {
                resetToken,
                resetTokenExpires: new Date(Date.now() + 3600000).toISOString(), // ✅ Ensures correct format
            },
            { where: { email:email } }
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

        return commonHelper.success(res, "Password reset link sent successfully!");
    } catch (error) {
        console.error("Forgot password error:", error);

        return commonHelper.error(
            res,
            Response.error_msg?.forgPwdErr || "Forgot password error",
            error.message
        );
    }
},

// resendForgotPasswordLink: async (req, res) => {
//   try {
//     const schema = Joi.object().keys({
//       email: Joi.string().email().required(),
//     });
//     let payload = await helper.validationJoi(req.body, schema);
//     const { email } = payload;
//     const user = await Models.user.findOne({
//       where: { email: email },
//     });
//     if (!user) {
//       return commonHelper.failed(res, Response.failed_msg.noAccWEmail);
//     }
//     const resetToken = await commonHelper.randomStringGenerate(req, res);
//     await Models.user.update(
//       {
//         resetToken: resetToken,
//         resetTokenExpires: new Date(Date.now() + 3600000), 
//       },
//       {
//         where: {
//           email: email,
//         },
//       }
//     );
//     const resetUrl = `${req.protocol}://${await commonHelper.getHost(
//       req,
//       res
//     )}/users/resetPassword?token=${resetToken}`; 
//     let subject = "Reset Password";
//     const transporter = await commonHelper.nodeMailer();
//     const emailTamplate = await commonHelper.forgetPasswordLinkHTML(
//       req,
//       user,
//       resetUrl,
//       subject
//     );
//     return commonHelper.success(res, Response.success_msg.passwordLink);
//   } catch (error) {
//     console.error("Forgot password error:", error);
//     return commonHelper.error(
//       res,
//       Response.error_msg.forgPwdErr,
//       error.message
//     );
//   }
// },
 resetPassword: async (req, res) => {
  try {
      const { token } = req.query;
      console.log("token token",token)
  if (!token) {
      return res.status(400).json({ success: false, message: "Token is required" });
  }
  const user = await Models.user.findOne({
      where: { resetToken: token },
      raw:true
  });
  console.log("user user user",user)
  if (!user || user.resetTokenExpires < new Date()) {
     return res.render("sessionExpire")
  }
 return res.render("changePassword",{data:user})
 
  } catch (error) {
      console.error("Reset password error:", error);
      return commonHelper.error(
          res,
          Response.error_msg.resetPwdErr,
          error.message
      );
  }
},
// forgotChangePassword: async (req, res) => {
//   try {
//     const schema = Joi.object().keys({
//       id: Joi.string().required(),
//       newPassword: Joi.string().required(),
//       confirmPassword: Joi.string().required(),
//     });

//     let payload = await helper.validationJoi(req.body, schema);
//     const { id, newPassword, confirmPassword } = payload;

//     if (newPassword !== confirmPassword) {
//       return commonHelper.failed(res, Response.failed_msg.pwdNoMatch);
//     }

//     const user = await Models.user.findOne({
//       where: { id: id },
//       raw: true,
//     });
//     if (!user) {
//       return commonHelper.failed(res, Response.failed_msg.userNotFound);
//     }

//     const hashedNewPassword = await commonHelper.bcryptData(
//       newPassword,
//       // process.env.SALT
//     );

//     await Models.user.update(
//       {
//         password: hashedNewPassword,
//         resetToken: null,
//         resetTokenExpires: null,
//       },
//       { where: { id: id } }
//     );

//     return res.render("successPassword", {
//       message: Response.success_msg.passwordChange,
//     });
//   } catch (error) {
//     console.error("Error while changing the password", error);
//     return commonHelper.error(
//       res,
//       Response.error_msg.chngPwdErr,
//       error.message
//     );
//   }
// },
// changePassword: async (req, res) => {
//   try {
//     const schema = Joi.object().keys({
//       newPassword: Joi.string().required(),
//       confirmPassword: Joi.string().required()
//     });

//     const { error, value } = schema.validate(req.body);
//     if (error) {
//       return res.status(400).json({ message: error.details[0].message });
//     }

//     const { newPassword, confirmPassword } = value;

//     const user = await Models.user.findOne({ where: { id: req.user.id }, raw: true });
//     if (!user) {
//       return res.json({ message: "User not found" });
//     }
//     const match = await bcrypt.compare(req.body.newPassword, user.password);
//     if (match) {
//       const hashedPassword = await bcrypt.hash(newPassword, 10);
//       await Models.user.update({ password: hashedPassword }, { where: { id: req.user.id } });

//       return res.json({ message: "Password reset successfully!" });
//     } else {
//       return res.json({ message: "old password is not correct" });

//     }

//   } catch (err) {
//     console.error("Error during password reset:", err);
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// }



// changePassword: async (req, res) => {
//   try {
//       console.log("User data in req.user:", req.user); // 🔍 Debugging

      

//       const schema = Joi.object({
//           newPassword: Joi.string().min(6).required(),
//           confirmPassword: Joi.string().valid(Joi.ref("newPassword")).required()
//               .messages({ "any.only": "Passwords do not match" }),
//       }).unknown(true);

//       const { error, value } = schema.validate(req.body);
//       if (error) {
//           return res.status(400).json({ message: error.details[0].message });
//       }

//       const { newPassword } = value;

//       // Hash new password and update
//       const hashedPassword = await bcrypt.hash(newPassword, 10);
//       await Models.user.update({ password: hashedPassword }, { where: { id: req.user.id } });

//       return res.status(200).json({ message: "Password reset successfully!" });

//   } catch (err) {
//       console.error("Error during password reset:", err);
//       return res.status(500).json({ message: "Server error", error: err.message });
//   }
// },

changePassword: async (req, res) => {
  try {
    console.log("req.body",req.body) 
    // return
      const schema = Joi.object({
          newPassword: Joi.string().min(6).required(),
          confirmPassword: Joi.string().valid(Joi.ref("newPassword")).required()
              .messages({ "any.only": "Passwords do not match" }),
      }).unknown(true);

      const { error, value } = schema.validate(req.body);
      if (error) {
          return res.status(400).json({ message: error.details[0].message });
      }

      const { newPassword } = value;

      // Hash new password and update
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await Models.user.update({ password: hashedPassword }, { where: { id: req.body.id } });
     res.render("success Password")

      // return res.status(200).json({ message: "Password reset successfully!" });

  } catch (err) {
      console.error("Error during password reset:", err);
      return res.status(500).json({ message: "Server error", error: err.message });
  }
},
};
