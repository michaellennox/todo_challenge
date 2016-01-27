var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
  title: String,
});

module.exports = mongoose.model('List', listSchema);
