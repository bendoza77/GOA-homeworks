const fs = require("fs");

const getUsers = (req, res) => {

    const users = JSON.parse(fs.readFileSync("users.json", "utf-8")).slice(1);

    return res.json({
        status: "succasse",
        data: { users }
    })


}

const deleteUsers = (req, res) => {

    const { id } = req.params;
    const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

    if (!id) {
        return res.status(400).json({
            status: "fail",
            message: "ID is invalid"
        })
    }

    const user = users.find(el => el.id === id * 1);

    if (!user) {
        return res.status(404).json({
            status: "fail",
            message: "User not found"
        })
    }

    fs.writeFileSync("users.json", JSON.stringify(users.filter(el => el.id !== id * 1)), "utf-8");

    return res.json({
        status: "succasse",
        data: { user }
    })

}

const signup = (req, res) => {

    const { username, email, password } = req.body;
    const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

    if (!username || !email || !password) {
        return res.status(400).json({
            status: "fail",
            message: "All field is required"
        })
    }

    const newUser = {
        id: users.length === 0 ? 1 : users[users.length - 1].id + 1,
        username: username,
        email: email,
        password: password
    }

    users.push(newUser);

    fs.writeFileSync("users.json", JSON.stringify(users), "utf-8");

    return res.json({
        status: "succasse",
        message: "User created succassefuly",
        data: { newUser }
    })


}

const login = (req, res) => {

    const { email, password } = req.body;
    const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));


    if (!email || !password) {
        return res.status(400).json({
            status: "fail",
            message: "All field is required"
        })
    }

    const user = users.find(el => el.email === email && el.password === password);

    console.log(user);

    if (!user) {
        return res.status(404).json({
            status: "fail",
            message: "User not found",
        })
    }

    return res.json({
        status: "succasse",
        message: "User login succassefuly",
        data: { user }
    })


}

module.exports = {
    getUsers,
    deleteUsers,
    signup,
    login
}