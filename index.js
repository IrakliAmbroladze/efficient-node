import { setTimeout } from "node:timers/promises";

setTimeout(2_000).then(function callback() {
  console.log("World");
});
console.log("Hello");
//Other operations
