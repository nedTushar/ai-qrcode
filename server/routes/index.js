const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const authController = require("../controllers/authController");

router.get("/auth/google/url", authController.getGoogleAuthUrl);
router.get("/auth/google/callback", authController.getGoogleCallback);
router.get("/auth/success", isAuthenticated, authController.success);
router.get("/auth/failure", authController.failure);

module.exports = router;
