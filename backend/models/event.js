const mongoose = require('mongoose')
const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   task: {
    type: String,
    required: true
   },
  

});

const event = mongoose.model('event', eventSchema);

module.exports = event;