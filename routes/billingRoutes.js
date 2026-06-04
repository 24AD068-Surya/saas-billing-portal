const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const roleMiddleware =
require("../middleware/roleMiddleware");

const {
  createBill,
  getBills
} = require("../controllers/billingController");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  createBill
);

router.get(
  "/",
  authMiddleware,
  getBills
);

module.exports = router;