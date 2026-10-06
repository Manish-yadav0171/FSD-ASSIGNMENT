const fs = require("fs");

console.log("Start");

const data = fs.readFileSync("data.txt", "utf8");

console.log(data);

console.log("End");