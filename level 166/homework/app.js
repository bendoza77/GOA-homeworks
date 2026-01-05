// Import the built-in http module to create an HTTP server
const http = require("http");

// Import the file system (fs) module to read and write files
const fs = require("fs");

// Create an HTTP server
const app = http.createServer((req, res) => {

    // Destructure the request object to get the URL and HTTP method
    const { url, method } = req;

    // Remove the leading "/" from the URL and split it by "/"
    // Example: "/cars/2" -> ["cars", "2"]
    const ur = url.slice(1).split("/");

    // Check if the request is a GET request to "/cars" or "/cars/:id"
    if (ur[0] === "cars" && method === "GET") {

        // If the URL is exactly "/cars"
        if (ur.length < 2) {

            // Read the cars.json file as a string
            const cars = fs.readFileSync("cars.json", "utf-8");

            // Set response header to indicate JSON data
            res.setHeader("Content-Type", "application/json");

            // Set HTTP status code to 200 (OK)
            res.statusCode = 200;

            // Send the list of cars as the response
            return res.end(cars);

        // If the URL is "/cars/:id"
        } else if (ur.length >= 2) {

            // Read and parse cars.json into a JavaScript array
            const cars = JSON.parse(fs.readFileSync("cars.json", "utf-8"));

            // Set response header to JSON
            res.setHeader("Content-Type", "application/json");

            // Set HTTP status code to 200 (OK)
            res.statusCode = 200;

            // Find a car with the matching id
            // ur[1] * 1 converts the string id to a number
            const car = cars.find(el => el.id === ur[1] * 1);

            // Send the found car as a JSON response
            return res.end(JSON.stringify(car));
        }

    // Check if the request is a POST request to "/cars"
    } else if (url === "/cars" && method === "POST") {

        // Variable to collect incoming request body data
        let body = "";

        // Listen for incoming data chunks
        req.on("data", info => {
            body += info.toString(); // Convert buffer to string and append
        });

        // This event fires when all data has been received
        req.on("end", () => {
            let data;

            // Try to parse the request body as JSON
            try {
                data = JSON.parse(body);
            } catch (error) {
                console.log(error); // Log error if JSON is invalid
            }

            // Extract car properties from the parsed data
            const { brand, model, year, color } = data;

            // Read existing cars from the file
            const cars = JSON.parse(fs.readFileSync("cars.json", "utf-8"));

            // Validate that all required fields are provided
            if (!brand || !model || !year || !color) {
                res.statusCode = 400; // Bad Request
                return res.end("All field is required");
            }

            // Create a new car object
            const newCar = {
                // If no cars exist, start id from 0, otherwise increment last id
                id: cars.length === 0 ? 0 : cars[cars.length - 1].id + 1,
                brand,
                model,
                year,
                color
            };

            // Add the new car to the cars array
            cars.push(newCar);

            // Write the updated cars array back to the file
            fs.writeFileSync("cars.json", JSON.stringify(cars), "utf-8");

            // Set HTTP status code to 201 (Created)
            res.statusCode = 201;

            // Send success message
            return res.end("Car added successfully");
        });
    }
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
