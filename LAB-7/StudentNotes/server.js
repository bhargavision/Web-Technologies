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
