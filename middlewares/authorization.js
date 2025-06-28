const { roles } = require("../data");

module.exports = (requiredPermissions) => {
  return (req, res, next) => {
    const roleInfo = roles.find(r => r.role === req.user.role);

    if (!roleInfo) {
      return res.status(403).json({ error: "Role not found" });
    }

    const hasPermission = requiredPermissions.every(p => roleInfo.permissions.includes(p));

    if (!hasPermission) {
      return res.status(403).json({ error: "Permission Denied" });
    }

    next();
  };
};
