const express = require("express");
const controller = require("../controllers/follow");

const router = express.Router();

// Routes
router.get("/test", controller.testFollow);

// Export Router
module.exports = router;
