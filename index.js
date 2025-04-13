// Reading a file synchronously

import { readFileSync } from "node:fs";

const data = readFileSync("/Users/Irakli/.bash_history");

console.log(`Length: ${data.length}`);
console.log(`Process: ${process.pid}`);
