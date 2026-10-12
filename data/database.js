const mongoose = require('mongoose');

async function connectDatabase() {
  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI) {
    if (process.env.NODE_ENV === 'test') {
      // In test mode, tests may manage the connection themselves.
      return;
    }
    throw new Error('MONGODB_URI is not configured');
  }

  // Fail fast if the DB is unreachable
  await mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 5000
  });

  if (process.env.NODE_ENV !== 'test') {
    console.log('Connected to MongoDB');
  }
}

module.exports = connectDatabase;
