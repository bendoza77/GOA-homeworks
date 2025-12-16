const fs = require("fs");

fs.writeFileSync("./text.txt", "utf-8");

const names = ["gabriel", "luka", "giorgi", "nika", "dato", "andria", "mate", "shota", "demetre"];

for (const i of names) {
    fs.appendFileSync("./text.txt", `${i}\n`, "utf-8");
}

const res = fs.readFileSync("./text.txt").toString();

console.log(res);