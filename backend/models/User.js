const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre('save', function(next) {
  console.log('Pre-save hook triggered for user:', this._id, this.name);
  next();
});

module.exports = mongoose.model('User', userSchema);