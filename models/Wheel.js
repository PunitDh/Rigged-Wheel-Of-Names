const { Schema, model } = require("mongoose");

const Wheel = new Schema(
  {
    _id: String,
    names: [String],
    results: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Wheel", Wheel);
