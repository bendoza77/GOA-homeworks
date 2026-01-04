const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {

    // A header is additional information that tells the server, for example, what format the
    // server should return information in and what status 
    // code to return at what time. In short, a header is additional information.

    const { url, method } = req

    if (url === "/cars" && method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        const cars = fs.readFileSync("cars.json", "utf-8");
        return res.end(cars);
    } else if (url === "/cars" && method === "POST") {
        let body = ""

        req.on("data", info => {
            body += info.toString();
        })

        req.on("end", () => {
            let data;

            try {
                data = JSON.parse(body);
            } catch(error) {
                console.log(error);
            }

            const { make, model, price, year } = data;
            if (!make || !model || !year || !price) {
                res.statusCode = 400;
                return res.end("All field is required");
            }
            res.statusCode = 201
            const newCar = { 
                make,
                model,
                year,
                price
            }
            const cars = JSON.parse(fs.readFileSync("cars.json", "utf-8"));
            cars.push(newCar);

            fs.writeFileSync("cars.json", JSON.stringify(cars), "utf-8");
            res.setHeader("Content-Type", "application/json");
            return res.end(JSON.stringify(newCar));
        })
    } else if (url === "/names" && method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        const names = fs.readFileSync("names.json", "utf-8");
        return res.end(names);

    }


    
})

app.listen(3000, () => {
    console.log("Server is running at port 3000")
})