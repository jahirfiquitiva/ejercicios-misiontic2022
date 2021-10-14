const mongoose = require('mongoose');
const { Schema } = mongoose;

function requiresPassword() {
  // this
  return !this.withGoogle;
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: requiresPassword,
  },
  role: {
    type: String,
    default: 'PENDING',
    enum: ['ADMIN', 'SALES', 'PENDING'],
  }, // vendedor, administrador, pendiente
  withGoogle: {
    type: Boolean,
    default: false,
  }
});

userSchema.methods.toJSON = function () {
  return { ...this.toObject(), password: undefined };
}

module.exports = mongoose.model('users', userSchema);
