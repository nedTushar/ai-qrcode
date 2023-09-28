const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI; // Update this with your MongoDB URI

try {
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (error) {
  console.error("MongoDB connection error:", error);
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

module.exports = db;
