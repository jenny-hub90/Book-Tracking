const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/BookManager";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

const booktrackerSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },

    ctype: String,
    videos: Number,
    author: String,
    active: Boolean, 
    date:{
        type: Date,
        default: Date.now
    }
})

//collection creation 
const Booktracker = new mongoose.model("Booktracker",booktrackerSchema);

//create document or insert

const reactBooktracker = new Booktracker({
    name: "React JS",
    ctype: "frontend",
    videos: 80,
    author: "Jenny Rajak",
    active: true
})

reactBooktracker.save();




