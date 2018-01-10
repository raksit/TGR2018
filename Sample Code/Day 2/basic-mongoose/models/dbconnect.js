var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/tgr2018test', {
  useMongoClient: true,
  /* other options */
});

module.exports = mongoose;
