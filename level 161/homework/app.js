const fs = require("fs");

// Task 1

    // საშინაო დავალებად გასაკეთებელი იყო codecademy


// Task 2

fs.writeFileSync("names.txt", "utf-8");

process.stdin.on("data", (data) => {

    const input = data.toString().trim();

    if (input === "exit") {
        process.exit(1);
    } else {
        fs.appendFileSync("./names.txt", `${input}\n`, "utf-8");
    }

})

