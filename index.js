const printGreeting = () => console.log("Hello");
const timerId = setTimeout(printGreeting, 4_000);

console.log("timerId", timerId);

const clearedId = clearTimeout(timerId);

console.log("clearedId", clearedId);
