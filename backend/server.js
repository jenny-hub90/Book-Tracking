const express = require("express");
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv");
require("./db/conn")

const port = process.env.PORT || 8000

dotenv.config();

const app = express();

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../frontend/public/images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  }
})

const upload = multer({storage: fileStorageEngine});
app.post("/single",upload.single('image'),(req,res) =>{
  console.log(req.file)
  res.send("Single file upload success")
})
 
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

