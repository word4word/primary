var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Story = require('./story')
var User = require('./user')
//creates the varant for the line model
var lineSchema = new Schema({
  //required attribute to assign the id to a user
  //a line must belong to only one user
  userId: { type: String, required: true },
  //the text in the line
  text: { type: String, required: true },
  //refference to the story document
  story: {type: Schema.ObjectId, ref: 'Story'}
})

var Line = mongoose.model('Line', lineSchema)
module.exports = Line