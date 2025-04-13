setTimeout(async () => {
  const { server } = await import("./server.js");
  server.listen(3000, () => {
    console.log("Server is running ...");
  });
}, 5_000);
