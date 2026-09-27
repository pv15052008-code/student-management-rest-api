const express = require("express");

const app = express();


// Import Logger Middleware
const logger = require("./middleware/logger");


// Import Student Routes
const studentRoutes = require("./routes/studentRoutes");


// =================================
// MIDDLEWARE
// =================================

// Read JSON data from request body
app.use(express.json());

// Custom Logger Middleware
app.use(logger);


// =================================
// ROUTES
// =================================

// Student routes
app.use("/students", studentRoutes);


// Home route
app.get("/", (req, res) => {

    res.status(200).json({
        message: "Student Management REST API is running"
    });

});


// =================================
// ERROR HANDLING
// =================================

// If route does not exist
app.use((req, res) => {

    res.status(404).json({
        message: "Route not found"
    });

});


// =================================
// START SERVER
// =================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
