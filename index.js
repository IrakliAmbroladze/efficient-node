// Reading a file asynchronously with promises

import { readFile } from "node:fs/promises";

async function logFileLength() {
  const data = await readFile("/Users/Irakli/.bash_history");
  console.log(`Length: ${data.length}`);
}

logFileLength();

console.log(`Process: ${process.pid}`);
