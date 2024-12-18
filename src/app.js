const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require("path");
const uploadRoutes = require("./routes/uploadRoutes");
//const connectDB = require('./config/db');

dotenv.config();
//connectDB();

//const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes

app.use("/images", express.static(path.join(__dirname, "/images")));
// Register routes
app.use("/api", uploadRoutes);
module.exports = app;