import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGODB_URL) // No need for `useNewUrlParser` or `useUnifiedTopology`
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));
