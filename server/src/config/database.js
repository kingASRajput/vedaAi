const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vedaai';
    
    await mongoose.connect(mongoURI);
    
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    // Don't exit - allow server to run without DB for demo
    console.log('Server will continue without database connection');
  }
};

module.exports = connectDB;
