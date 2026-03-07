const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    const { method } = req;
    const Url = new URL(req.url, `http://localhost:3000`);
    if (method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }

    if (Url.pathname === "/users" && method === "GET") {
        const users = fs.readFileSync("data.json", "utf-8");
        if (!Url.search) {
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(users);
        } else {
            const email = Url.search.slice(1).split("&").find(el => el.startsWith("email"));
            if (email) {
                const user = users.find(el => el.email === email.split("=")[1]);
                if (user) {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    return res.end(user);
                } else {
                    res.writeHead(404, { "Content-Type": "application/json" });
                    return res.end("User not found");
                }
            }
        }

    } else if (Url.pathname === "/users" && method === "POST") {
        const users = JSON.parse(fs.readFileSync("data.json", "utf-8"));
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        })

        req.on("end", () => {
            const data = JSON.parse(body);

            console.log(data);

            const { name, email, age } = data;

            if (!name || !email || !age) {
                req.writeHead(400, { "Content-Type": "application/json" });
                return res.end("All field is required");
            }

            if (users.find(el => el.email === email)) {
                req.writeHead(400, { "Content-Type": "application/json" });
                return res.end("User email already exists");
            }

            const newUser = {
                id: users.length === 0 ? 1 : users[users.length - 1].id + 1,
                name: name,
                email: email,
                age: age
            }

            res.writeHead(201, { "Content-Type": "application/json" });
            users.push(newUser);
            fs.writeFileSync("data.json", JSON.stringify(users), "utf-8");
            return res.end(JSON.stringify(newUser));
        })
    } else if (Url.pathname === "/users" && method === "DELETE") {
        const email = Url.search.slice(1).split("&").find(el => el.startsWith("email"));
        const users = JSON.parse(fs.readFileSync("data.json", "utf-8"));
        if (email) {
            const user = users.findIndex(el => el.email === email.split("=")[1]);
            if (user !== -1) {
                users.splice(user, 1);
                fs.writeFileSync("data.json", JSON.stringify(users), "utf-8");
                req.writeHead(200, { "Content-Type": "application/json" });
                return res.end("User deleted successfully");
            } else {
                res.writeHead(404, { "Content-Type": "application/json" });
                return res.end("User not found");
            }
        }
    }


})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})