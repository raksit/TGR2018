var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TESA');

module.exports = mongoose;