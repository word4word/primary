var mongoose = require('mongoose')
mongoose.Promise = global.Promise
var db = mongoose.connect('localhost:51707')
module.exports = db