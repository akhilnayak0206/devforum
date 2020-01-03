const mongoose = require('mongoose');

const config = require('config');

const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log('Error connectDB', err.message);
    //Exit when failed
    process.exit(1);
  }
};

//Remove this in production.
mongoose.set('debug', true);

module.exports = connectDB;
