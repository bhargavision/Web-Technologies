const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const userRoutes = require("./routes/users");

mongoose
  .connect("mongodb://127.0.0.1:27017/testdb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
