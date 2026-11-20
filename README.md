# Student Management API

A RESTful Student Management API built with **Node.js, Express.js, MongoDB, and Mongoose**. This project provides user authentication, JWT-based authorization, and complete CRUD operations for managing student records.

## 📌 Project Overview

The Student Management API is a backend application designed to manage student information securely. It includes user registration and login functionality, password hashing, JWT authentication, and protected student management routes.

The project was developed as part of **Module 11 Assignment** to practice backend development and REST API implementation.

## ✨ Key Features

### 1. User Authentication
- User Registration
- User Login
- Unique email validation
- Password hashing using bcryptjs
- JWT token generation
- Secure authentication middleware

### 2. Student Management (CRUD)
- Create a new student
- Retrieve all students
- Retrieve a single student by ID
- Update student information
- Delete a student record

### 3. Security
- JWT-based authentication
- Protected student API routes
- Token verification through middleware
- Passwords stored as hashed values

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript Runtime |
| Express.js | Backend Framework |
| MongoDB | NoSQL Database |
| Mongoose | Database Modeling |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| Postman | API Testing |

## 📂 Project Structure

```text
Student-Management-API/
│
├── data/
├── middleware/
├── models/
├── routes/
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## 🔐 API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT |

### Student Routes

All student routes require a valid JWT token.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/students` | Create a student |
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get a student by ID |
| PUT | `/api/students/:id` | Update student information |
| DELETE | `/api/students/:id` | Delete a student |

## 👤 User Schema

The User model contains:

- `name`
- `email` (Unique)
- `password` (Hashed)

## 🎓 Student Schema

The Student model contains:

- `name`
- `email`
- `phone`
- `age`
- `course`

## 🔑 Authentication Workflow

1. A user registers with their name, email, and password.
2. The password is hashed using bcryptjs before storage.
3. The user logs in with their credentials.
4. The server verifies the credentials and generates a JWT token.
5. The client sends the token in the Authorization header when accessing protected routes.
6. Authentication middleware verifies the token before allowing access to student management operations.

**Authorization Header:**

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

## ⚙️ Installation & Setup

### Prerequisites

- Node.js
- MongoDB
- npm
- Postman

### 1. Clone the Repository

```bash
git clone https://github.com/hrithikdebnath37-max/student-management-api.git
```

### 2. Navigate to the Project Directory

```bash
cd student-management-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and configure your database connection and JWT secret according to your application.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5. Run the Server

Use the start command configured in your `package.json`.

```bash
npm start
```

## 🧪 API Testing

The API endpoints can be tested using **Postman**.

Testing includes:

- User registration and login
- JWT token generation and verification
- Protected route access
- Student creation and retrieval
- Student information updates
- Student deletion
- Unauthorized access handling

## 🎯 Learning Outcomes

Through this project, I practiced:

- Building RESTful APIs using Express.js
- Connecting MongoDB with Mongoose
- Designing User and Student schemas
- Implementing authentication using JWT
- Securing passwords with bcryptjs
- Creating authentication middleware
- Implementing CRUD operations
- Testing backend APIs using Postman

## 👨‍💻 Developer

**Rithik Debnath**

Computer Science & Engineering Student  
United International University

- GitHub: [@hrithikdebnath37-max](https://github.com/hrithikdebnath37-max)

---

⭐ If you find this project useful, feel free to explore the repository!
