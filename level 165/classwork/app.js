const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {

    const { url, method } = req

    if (url === "/cars" && method === "GET") {
        res.setHeader("Content-Type", "application/json");
        const cars = fs.readFileSync("cars.json", "utf-8");
        return res.end(cars);
    } else if (url === "/cars" && method === "POST") {
        return res.end("Car added successfully!")
    }



})

app.listen(3000, () => {
    console.log("Server is running at port 3000");
})