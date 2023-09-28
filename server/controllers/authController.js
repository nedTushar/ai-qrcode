const passport = require("passport");
const dotenv = require("dotenv");

dotenv.config();

const authController = {};

// Authenticate With Google
authController.getGoogleAuthUrl = passport.authenticate("google", {
  scope: ["profile", "email"],
});

// Google Authentication Callback
authController.getGoogleCallback = passport.authenticate("google", {
  // TODO Make this Route Better
  failureRedirect: "/",
  successRedirect: process.env.CLIENT_URL,
});

// Handle Successful Authentication Requests.
authController.success = (req, res) => {
  try {
    if (req.user) {
      // If user is authenticated, send a success response with user data
      res
        .status(200)
        .json({ error: false, message: "success", user: req.user });
    } else {
      // If user is not authenticated, send an error response
      res.status(403).json({ error: true, message: "not authorized" });
    }
  } catch (error) {
    // Handle any unexpected errors here
    console.error("An error occurred:", error);
    res.status(500).json({ error: true, message: "internal server error" });
  }
};

// Handle Failure Authentication Requests.
authController.failure = (req, res) => {};

module.exports = authController;
