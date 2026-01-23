const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {

    const { method } = req;
    const url = new URL(req.url, "http://localhost:3000");


    if (method === "POST" && url.pathname === "/register") {
        const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
        let data = ""
        req.on("data", info => {
            data += info.toString();
        })

        req.on("end", () => {
            body = JSON.parse(data);
            
            const { username, email, password, isStudent } = body;

            if (!username || !email || !password || !isStudent) {
                res.writeHead(400, {
                    "Content-Type": "application/json"
                })

                return res.end("All field is required");
            } else {
                const newUser = {
                    id: Date.now(),
                    username,
                    email,
                    password,
                    isStudent
                }

                users.push(newUser);

                fs.writeFileSync("users.json", JSON.stringify(users), "utf-8");

                res.writeHead(200, {
                    "Content-Type": "application/json"
                })

                return res.end(newUser);
            }
        })
    } else if (method === "GET", url.pathname === "/users") {
        const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
        if (url.search) {
            const id = (url.search.slice(1).split("&").find(el => el.split("=")[0] === "id")).split("=")[1];
            const isStudent = (url.search.slice(1).split("&").find(el => el.split("=")[0] === "isStudent")).split("=")[1];

            let user;

            if (id && isStudent) {
                users.find(el => el.id === id && el.isStudent === isStudent);
            } else if (id) {
                users.find(el => el.id === id);
            }  else if (isStudent) {
                users.find(el => el.id === id);
            }

            res.writeHead(200, {
                "content-type": "application/json"
            })

            return res.end(user);
        }

        res.writeHead(200, {
            "content-type": "application/json"
        });

        return res.end(users)
        
    } else if (method === "DELETE" && url.pathname === "/users") {
        const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
        const id = (url.search.slice(1).split("&").find(el => el.split("=")[0] === "id")).split("=")[1];

        if (!id) {
            return res.end("Id is required");
        } else {
            users.slice(id);
            fs.writeFileSync("users.json", JSON.stringify(users), "utf-8");
        }

    }


})

app.listen(3000, () => {
    console.log("Server is running at port 3000")
})

