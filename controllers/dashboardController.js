exports.adminDashboard = (req, res) => {
  res.json({ message: "Admin Dashboard" });
};

exports.managerDashboard = (req, res) => {
  res.json({ message: "Manager Dashboard" });
};

exports.userDashboard = (req, res) => {
  res.json({ message: "User Dashboard" });
};
