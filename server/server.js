const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const golfBallsRoute = require("./routes/golfBalls");

//load env vars
dotenv.config();

//init express
const app = express();

//middleware
app.use(cors());
app.use(express.json()); //for parsing json bodies

//connect to mongodb
connectDB();

//basic route
app.get("/", (req, res) => {
  res.send("Golf Ball PoS API is running");
});

//use the golf balls route
app.use("/api/golfballs", golfBallsRoute);

//server port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
