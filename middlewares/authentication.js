const { users } = require("../data");

module.exports = (req, res, next) => {
  const userId = req.headers["user_id"];

  if (!userId) {
    return res.status(401).json({ error: "Missing user_id in headers" });
  }

  const user = users.find(u => u.id === parseInt(userId));

  if (!user) {
    return res.status(401).json({ error: "Invalid user_id" });
  }

  req.user = user;
  next();
};
