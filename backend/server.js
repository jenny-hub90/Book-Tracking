const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
require("./db/conn")

const port = process.env.PORT || 8000

dotenv.config();

const app = express();
 
app.use(cors());
app.use(express.json());

const bookRoute = require('./routes/addBookRoutes')
app.use("/", bookRoute)

const reviewRoute = require('./routes/addReviewRoutes')
app.use("/", reviewRoute)

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

