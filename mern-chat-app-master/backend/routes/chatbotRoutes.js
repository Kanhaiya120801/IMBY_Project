const express = require("express");
const {
  accessChatBot
} = require("../controllers/accessChatBot");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(accessChatBot);

module.exports = router;
