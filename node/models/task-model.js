const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  // _id: String,
  task: {
    type: String,
    required: true,
  },
  due: {
    type: String,
    required: true,
    match: new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$') // 2021-23-32
  },
  done: Boolean,
});

module.exports = mongoose.model('tasks', taskSchema);