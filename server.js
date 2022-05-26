require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then((res) => {
    console.log("Connected to MongoDB database:", res.connections[0].name);
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB database", err);
  });

app.get("/", (_, res) => {
  console.log("/");
  res.send("Home page");
});

app.get("/dev", (req, res) => {
  console.log("/dev");
  res.send("Dev page");
});

app.get("/:wheelId", (req, res) => {
  const { wheelId } = req.params;
  console.log("/", wheelId);
  res.send(`Wheel page ${wheelId}`);
});

app.listen(port, () => console.log("Server started on port", port));
