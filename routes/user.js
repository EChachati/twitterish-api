const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

// Routes
router.get("/test", userController.testUser);

// Export Router
module.exports = router;
