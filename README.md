# Student Management REST API

A REST API built using **Node.js** and **Express.js** for managing student records.

## Technologies Used

- Node.js
- Express.js
- Postman / Thunder Client
- GitHub
- Render

## Features

- Create a new student
- Get all students
- Get student by ID
- Update student details
- Delete a student
- Custom logger middleware
- Modular routing
- Error handling
- Proper HTTP status codes
- JSON data and Array-based storage

## Project Structure

```text
student-management-rest-api/
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
│
├── routes/
│   └── studentRoutes.js
│
├── middleware/
│   └── logger.js
│
└── data/
    └── students.js
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get student by ID |
| POST | `/students` | Create a new student |
| PUT | `/students/:id` | Update student details |
| DELETE | `/students/:id` | Delete a student |

## Sample Student Data

```json
{
  "name": "Neha",
  "age": 22,
  "course": "BCA",
  "email": "neha@gmail.com"
}
```

## HTTP Status Codes

| Status Code | Meaning |
|-------------|---------|
| 200 | Request successful |
| 201 | Student created successfully |
| 400 | Bad request |
| 404 | Student or route not found |

## How to Run Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
npm start
```

The server will run on:

```text
http://localhost:3000
```

## API Testing

The APIs were tested using **Postman / Thunder Client** for:

- GET all students
- GET student by ID
- POST a new student
- PUT student details
- DELETE a student

## Live API

[https://student-management-rest-api-9s3o.onrender.com](https://student-management-rest-api-9s3o.onrender.com)

## GitHub Repository

[https://github.com/pv15052008-code/student-management-rest-api](https://github.com/pv15052008-code/student-management-rest-api)

## Important Note

This project uses an in-memory JavaScript array for storing student data. No database is used, as required by the assignment.

## Author

**Payal Verma**