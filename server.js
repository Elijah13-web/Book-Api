import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bookRoutes from './src/routes/books.js'; // Ensure correct path
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies

// MongoDB connection
const MONGO_URI = process.env.MONGODB_URL || 'mongodb://localhost:27017/bookstore'; // Fallback to default if not set
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Test endpoint
app.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome to the Book API" });
});

// Use the book routes
app.use('/api', bookRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
