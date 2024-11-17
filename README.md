Assignment Submission Portal
---------------------------------------------------
This is a backend system for an Assignment Submission Portal where users can upload their assignments, and admins can view, accept, or reject them. It is built with Node.js, Express, and MongoDB.



Features

Users can:
           Register and log in.
          Upload assignments to a specific admin.
          
Admins can:
          Register and log in.
          View all assignments assigned to them.
           Accept or reject assignments.
Tech Stack

Backend Framework: Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

Password Hashing: bcryptjs
install all the prerequisites,

install Node.js
------------------------
Now Clone the repository 
git clone https://github.com/yourusername/assignment-submission-portal.git
cd assignment-submission-portal
-------------------------------
install dependencies

now start the server with npm start.

Test this with using postman or any.

while testing Make sure pass the Authorization header with correct JWT token when accessing routes.

you can proceed with sending data in JSON format.
-----------------------
Endpoints
---
User Endpoints
-----
POST /auth/register

Register a new user.
Request body:

POST /auth/login

Log in as a user.
Request body:

POST /assignments/upload

Upload an assignment for a specific admin.

Request body:

Headers:


Authorization: Bearer <JWT_TOKEN>

GET /auth/admins

Fetch all admin users.
Response:


Admin Endpoints

POST /auth/register

Register a new admin (same as user registration).


POST /auth/login

Log in as an admin (same as user login).


GET /assignments

Get all assignments assigned to the logged-in admin.

Headers:

Authorization: Bearer <JWT_TOKEN>
POST /assignments/
/accept
Accept a specific assignment by ID.
Headers:

Authorization: Bearer <JWT_TOKEN>
POST /assignments/
/reject
Reject a specific assignment by ID.
Headers:

Authorization: Bearer <JWT_TOKEN>
Environment Variables
MONGO_URI: MongoDB connection string (e.g., mongodb://localhost:27017/assignment-portal)
JWT_SECRET: Secret key used to sign the JWT tokens.
PORT: Port number for the application (default is 5000).
