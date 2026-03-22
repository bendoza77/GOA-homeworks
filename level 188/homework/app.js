// Task 1

// middleware punktsiebi aris iseti punktsiebi romelits raghats mokmedebes shoris khortsieldeba magpalitad 
// rodesats bilik’sa da pukntsias shoris vts’ert express.json() es aris shuamavali romelits bilik’sa da 
// pukntsias shoris eshveba anu jer shuamavali eshveba da mere punktsia


// Task 2

// The next function is a function that is used to run the next intermediary or path after the first function has been executed.


// Import express library (used to create server)
const express = require("express");

// Import morgan middleware (used for logging requests)
const morgan = require("morgan");

// Create express app (server instance)
const app = express();

// This is a fake database (array of posts)
// It stores all posts in memory
const posts = [
  {
    "id": 1,
    "username": "dev_gabriel",
    "title": "Finished New Website",
    "content": "Just completed a modern responsive website using React and Tailwind. Super clean and fast 🚀"
  },
  {
    "id": 2,
    "username": "dev_gabriel",
    "title": "Coding Tip",
    "content": "Keep your code simple and readable. Future you will thank you 💡"
  },
  {
    "id": 3,
    "username": "dev_gabriel",
    "title": "Freelance Work",
    "content": "I’m currently building websites for startups and small businesses. Let’s work together 💻"
  },
  {
    "id": 4,
    "username": "dev_gabriel",
    "title": "UI Design",
    "content": "Experimented with a new dark mode UI today. Minimal, smooth, and modern 🌙"
  },
  {
    "id": 5,
    "username": "dev_gabriel",
    "title": "Game Dev Idea",
    "content": "Thinking about building an open-world game as a side project. Big challenge but exciting 🎮"
  }
]

// Use morgan middleware
// "dev" format logs HTTP method, URL, status code, response time, etc.
app.use(morgan("dev"));

// GET request → /posts
// This route runs when user accesses /posts
// It returns all posts as JSON
app.get("/posts", (req, res) => {

    // Send JSON response
    return res.json({
        status: "succasse", // response status (custom text)
        data: { posts }     // returning posts array
    });

});


// POST request → /
// Used to create a new post
app.post("/", (req, res) => {

    // Extract data from request body
    const { title, content, username } = req.body;

    // Validate required fields
    if (!title || !content || !username) {
        return res.json({
            status: "fail",
            message: "All fields are required" // error message
        })
    }

    // Create new post object
    const newUser = {
        // Generate ID:
        // If array is empty → id = 1
        // Otherwise → last post id + 1
        id: posts.length === 0 ? 1 : posts[posts.length - 1].id + 1,

        // Assign values
        username: username,
        title: title,
        content: content
    }

    // Add new post to array
    posts.push(newUser);

    // Send success response with status code 201 (created)
    return res.status(201).json({
        status: "succasse",
        message: "User created successfully",
        data: { newUser }
    })

});


// Start server on port 3000
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});