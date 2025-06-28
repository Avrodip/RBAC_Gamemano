const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authentication");
const authorize = require("../middlewares/authorization");

const {
  adminDashboard,
  managerDashboard,
  userDashboard
} = require("../controllers/dashboardController");

router.get("/admin-dashboard", auth, authorize(["view_admin_dashboard"]), adminDashboard);
router.get("/manager-dashboard", auth, authorize(["view_manager_dashboard"]), managerDashboard);
router.get("/user-dashboard", auth, authorize(["view_user_dashboard"]), userDashboard);

module.exports = router;
