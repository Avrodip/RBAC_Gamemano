const users = [
  { id: 1, username: "admin", password: "admin123", role: "admin" },
  { id: 2, username: "manager", password: "manager123", role: "manager" },
  { id: 3, username: "user", password: "user123", role: "user" }
];

const roles = [
  {
    role: "admin",
    permissions: [
      "view_admin_dashboard",
      "view_manager_dashboard",
      "view_user_dashboard",
      "manage_users",
      "manage_roles"
    ]
  },
  {
    role: "manager",
    permissions: [
      "view_manager_dashboard",
      "view_user_dashboard",
      "manage_team"
    ]
  },
  {
    role: "user",
    permissions: [
      "view_user_dashboard"
    ]
  }
];

module.exports = { users, roles };
