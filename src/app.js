const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const authRoutes = require('./routes/authRoutes');
const destinationRoutes = require('./routes/destinationRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/destinations', destinationRoutes);

module.exports = app;