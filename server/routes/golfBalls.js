const express = require("express");
const Golfballs = require("../models/golfBall");

const router = express.Router();

//route to get all golf balls
router.get("/", async (req, res) => {
  const { brand, condition } = req.query;

  try {
    const query = {};
    if (brand) query.brand = new RegExp(brand, "i");
    if (condition) query.condition = condition;

    const golfBalls = await Golfballs.find(query); // Use correct model name
    res.status(200).json(golfBalls);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching golf balls", error: error.message });
  }
});

//route to add a new golf ball
router.post("/add", async (req, res) => {
  const { brand, model, condition, price, quantity, description } = req.body;

  try {
    const newGolfBall = new Golfballs({
      brand,
      model,
      condition,
      price,
      quantity,
      description,
    });
    const savedGolfBall = await newGolfBall.save();
    res.status(201).json(savedGolfBall); //respond with the saved golf ball
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error adding golf ball", error: error.message });
  }
});

module.exports = router;
