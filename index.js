// Reading a file synchronously

import { readFile } from "node:fs";

readFile("/Users/Irakli/.bash_history", function cb(error, data) {
  console.log(`Length: ${data.length}`);
});

console.log(`Process: ${process.pid}`);
