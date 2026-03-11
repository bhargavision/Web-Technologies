const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient("mongodb://127.0.0.1:27017");

let db;

async function start() {
  await client.connect();
  db = client.db("student_notes");
  app.listen(3000);
}

start();

app.post("/notes", async (req, res) => {
  const note = {
    title: req.body.title,
    subject: req.body.subject,
    description: req.body.description,
    created_date: new Date(),
  };
  await db.collection("notes").insertOne(note);
  res.send("added");
});

app.get("/notes", async (req, res) => {
  const data = await db.collection("notes").find().toArray();
  res.json(data);
});

app.delete("/notes/:id", async (req, res) => {
  await db.collection("notes").deleteOne({ _id: new ObjectId(req.params.id) });
  res.send("deleted");
});
app.get("/books/search/:title", async (req, res) => {
  const data = await db
    .collection("books")
    .find({
      title: { $regex: req.params.title, $options: "i" },
    })
    .toArray();
  res.json(data);
});

app.get("/books/category/:cat", async (req, res) => {
  const data = await db
    .collection("books")
    .find({
      category: req.params.cat,
    })
    .toArray();
  res.json(data);
});

app.get("/books/sort/price", async (req, res) => {
  const data = await db.collection("books").find().sort({ price: 1 }).toArray();
  res.json(data);
});

app.get("/books/sort/rating", async (req, res) => {
  const data = await db
    .collection("books")
    .find()
    .sort({ rating: -1 })
    .toArray();
  res.json(data);
});

app.get("/books/top", async (req, res) => {
  const data = await db
    .collection("books")
    .find({
      rating: { $gte: 4 },
    })
    .limit(5)
    .toArray();
  res.json(data);
});

app.get("/books/page/:num", async (req, res) => {
  const page = parseInt(req.params.num);
  const data = await db
    .collection("books")
    .find()
    .skip((page - 1) * 5)
    .limit(5)
    .toArray();
  res.json(data);
});
