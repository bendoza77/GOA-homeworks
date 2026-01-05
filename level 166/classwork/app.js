const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {

    const { url, method } = req
    const ur = url.slice(1).split("/");

    if (ur[0] === "cars" && method === "GET") {
        if (ur.length < 2) {
            const cars = fs.readFileSync("cars.json", "utf-8");
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 200;
            return res.end(cars);
        } else if (ur.length >= 2) {
            const cars = JSON.parse(fs.readFileSync("cars.json", "utf-8"));
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 200;
            const car = cars.find(el => el.id === ur[1] * 1);
            return res.end(JSON.stringify(car));
        }
    } else if (url === "/cars" && method === "POST") {
        let body = "";
        req.on("data", info =>{
            body += info.toString();
        })

        req.on("end", () => {
            let data;

            try {
                data = JSON.parse(body);
            } catch(error) {
                console.log(error);
            }


            const { brand, model, year, color } = data;
            const cars = JSON.parse(fs.readFileSync("cars.json", "utf-8"));

            if (!brand || !model || !year || !color) {
                res.statusCode = 400;
                return res.end("All field is required");
            }

            const newCar = {
                id: cars.length === 0 ? 0 : cars[cars.length - 1].id + 1,
                brand, 
                model,
                year,
                color
            }

            cars.push(newCar);
            fs.writeFileSync("cars.json", JSON.stringify(cars), "utf-8");
            res.statusCode = 201;
            return res.end("Car added successfully");

        })
    }


})

app.listen(3000, () => {
    console.log("Server is running at port 3000");
})