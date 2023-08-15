const express = require("express");
const controller = require("../controllers/publication");

const router = express.Router();

// Routes
router.get("/test", controller.testPublication);

// Export Router
module.exports = router;
