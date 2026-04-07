const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);

  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.write("Welcome to the Home Page\n");
  } else if (req.url === "/about") {
    res.write("This is the About Page\n");
  } else {
    res.write("404 Not Found\n");
  }

  res.end("Response sent successfully");
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
