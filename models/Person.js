const { Schema, model } = require("mongoose");

const Person = new Schema(
  {
    name: String,
    probability: Number,
    wheel: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Person", Person);
