// Dotenv configuration
require("dotenv").config();
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("./passport");
require("./db/db.js");


const PORT = process.env.PORT || 3001;
const app = express();

// Middlewares
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Routes
const routes = require("./routes/index");
app.use("/", routes);

// Start the Server
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
