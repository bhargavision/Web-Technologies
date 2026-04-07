const express = require("express");
const app = express();

app.use(express.json());

// Global Middleware 1 (Logger)
app.use((req, res, next) => {
  console.log(
    `[GLOBAL 1] ${req.method} ${req.url} - ${new Date().toISOString()}`,
  );
  next();
});

// Global Middleware 2
app.use((req, res, next) => {
  console.log("[GLOBAL 2] Request received");
  next();
});

// Route-level Middleware
const checkAuth = (req, res, next) => {
  console.log("[ROUTE] Checking auth...");
  const authorized = true;

  if (!authorized) {
    return res.status(403).send("Forbidden");
  }
  next();
};

// Route with middleware chaining
app.get("/secure", checkAuth, (req, res) => {
  console.log("[HANDLER] Secure route accessed");
  res.send("Secure data");
});

// Route without route-level middleware
app.get("/", (req, res) => {
  console.log("[HANDLER] Home route");
  res.send("Home Page");
});

// Another middleware layer (demonstrating flow)
app.use((req, res, next) => {
  console.log("[GLOBAL 3] End of middleware chain");
  next();
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

/*

run node server.js
What happens (execution flow)
Request → /secure
GLOBAL 1 → GLOBAL 2 → ROUTE (checkAuth) → HANDLER → GLOBAL 3
Request → /
GLOBAL 1 → GLOBAL 2 → HANDLER → GLOBAL 3
*/
