const printGreeting = () => console.log("Hello");

const intervalId = setInterval(printGreeting, 1_000);

setTimeout(() => clearInterval(intervalId), 10_000);
