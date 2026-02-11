const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")

    const { method } = req;
    const url = new URL(req.url, "http://localhost:3000");
    console.log(method)

    if (method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }


    if (url.pathname === "/products" && method === "GET") {
        const products = fs.readFileSync("products.json", "utf-8");
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        return res.end(products);
    } else if (url.pathname === "/products" && method === "POST") {
        const products = JSON.parse(fs.readFileSync("products.json", "utf-8"));
        let body = "";
        req.on("data", info => {
            body += info.toString();
        })

        req.on("end", () => {
            let data = JSON.parse(body);


            const { name, price, category, instock } = data;

            if (!name || !price || !category || !instock) {
                res.writeHead(400, {
                    "content-type": "application/json"
                })
                return res.end("All field is required");
            }

            const newProduct = {
                id: products.length === 0 ? 1 : products[products.length - 1].id + 1,
                name: name,
                category: category,
                price: price,
                inStock: instock
            }

            products.push(newProduct);

            fs.writeFileSync("products.json", JSON.stringify(products), "utf-8");
            res.writeHead(200, {
                "content-type": "application/json"
            })

            return res.end(JSON.stringify(newProduct))
        })
    }


})

app.listen(3000, () => {
    console.log("Server is running at port 3000");
})