const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse incoming JSON data

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/v1/user', authRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
