const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")

    const { method } = req;
    const url = new URL(req.url, "http://localhost:3000");

    if (url.pathname === "/products" && method === "GET") {
        const products = fs.readFileSync("products.json", "utf-8");
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        return res.end(products);
    }


})

app.listen(3000, () => {
    console.log("Server is running at port 3000");
})