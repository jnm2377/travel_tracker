const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
  city: {type: String, required: true},
  state: {type: String, required: true},
  country: {type: String, required: true},
  landmarks: String,
  dates: String,
  description: {type: String, required: true}, //trip experience, etc.
  img: [] //that way they can add more than one image? idk, can change to just String for one url.
})


module.exports = mongoose.model('Trip', tripSchema);
