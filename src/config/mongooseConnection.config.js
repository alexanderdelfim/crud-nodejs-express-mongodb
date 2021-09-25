const mongoose = require('mongoose');

const database = require('./db.config');

mongoose.Promise = global.Promise;

mongoose.connect(database.local.localUrlDatabse).then(() => {
  console.log('Database has been connected successfully!');
}, (err) => {
  console.log(`Error connecting to Database...: ${err}`);
  process.exit();
});
