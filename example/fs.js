var fs = require("fs");

fs.writeFileSync("test.njs", "Some text");
fs.appendFileSync("test.njs", "\nWe add something\n");
console.log(fs.readFileSync("test.njs"));
fs.unlinkSync("test.njs");
