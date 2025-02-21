const jwt = require("jsonwebtoken");
const Models = require("../models/index");

module.exports = {
    verifyToken: (req, res, next) => {
      const token = req.headers["authorization"];
      if (!token || !token.startsWith("Bearer ")) {
        return res.status(403).json({ message: "Token is not provided!" });
      }
  
      const actualToken = token.split(" ")[1];
      jwt.verify(actualToken, process.env.JWT_SECRET, async (err, authData) => {

        if (err) {
          console.error("JWT Verification Error:", err);
          return res.status(403).json({ message: "Invalid token!" });
        }
  
        console.log("Decoded Token:", authData); // Debugging
  
        let userDetail = await Models.user.findOne({
          where: { id: authData.id }, // Ensure this matches the token payload
          raw: true,
        });
  
        if (!userDetail) {
          return res.status(403).json({ message: "User not found!" });
        }
  
        req.user = userDetail;
        next();
      });
    },
  };
  
