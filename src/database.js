import mongoose from 'mongoose';

import './models/joined';

class DatabaseConnection {
  db = null;
  start() {
    mongoose.connect(process.env.MONGODB_URI);
    this.db = mongoose.connection;
    this.db.on('error', console.error.bind(console, 'connection error:'));
    this.db.once('open', function () {
      // we're connected!
      console.log("Mongoose Started!");
    });
  }
}

const database = new DatabaseConnection();
export default database;