const mongoose = require("mongoose");

//define the schema for golf balls
const golfBallSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
    enum: ["Excellent", "Good", "Fair"],
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive"],
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "Quantity must be positive"],
  },
  description: {
    type: String,
    required: false,
  },
});

//create the model based on the schema
const Golfballs = mongoose.model("Golfballs", golfBallSchema);

module.exports = Golfballs;
