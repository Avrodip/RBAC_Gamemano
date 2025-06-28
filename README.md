# RBAC_Gamemano


RBAC-Based Node.js API (User ID Authentication Only)
=====================================================

A simple role-based access control (RBAC) API built using Node.js and Express, without JWT.
Users are authenticated via 'user_id' passed in the request headers.

Project Structure:
------------------
.
├── controllers/
│   ├── authController.js
│   └── dashboardController.js
├── middlewares/
│   ├── authentication.js
│   └── authorization.js
├── routes/
│   ├── authRoutes.js
│   └── dashboardRoutes.js
├── data.js
├── app.js
├── package.json
└── README.txt

Features:
---------
- Login with username & password
- Role-Based Access Control (Admin, Manager, User)
- Handles 401, 403, 404, 500 status codes
- No token or session — uses 'user_id' header for authentication

Roles and Permissions:
-----------------------
admin:
  - view_admin_dashboard
  - view_manager_dashboard
  - view_user_dashboard
  - manage_users
  - manage_roles

manager:
  - view_manager_dashboard
  - view_user_dashboard
  - manage_team

user:
  - view_user_dashboard

Installation:
-------------
npm install

Start the Server:
-----------------
node app.js

(optional) With nodemon:
-------------------------
npx nodemon app.js

API Endpoints:
--------------
1. POST /api/login
   Body:
   {
     "username": "admin",
     "password": "admin123"
   }

   Response:
   {
     "message": "Login successful",
     "userId": 1,
     "role": "admin"
   }

2. GET /api/admin-dashboard
   Headers: { "user_id": 1 }

3. GET /api/manager-dashboard
   Headers: { "user_id": 2 }

4. GET /api/user-dashboard
   Headers: { "user_id": 3 }

Data Structure:
---------------
Stored in data.js:
- users: Array of { id, username, password, role }
- roles: Array of { role, permissions: [] }

Error Codes:
------------
400 - Bad Request
401 - Unauthorized (missing or invalid user_id)
403 - Forbidden (role lacks permission)
404 - Not Found (invalid route)
500 - Internal Server Error
