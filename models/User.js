const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    max: 50,
    required: true,
    unique: true
  },
  profession: {
    type: String,
    required: true,
    unique: true
  },
  friendsId: {
    type: Array,
    default: [],
  },
  followers: {
    type: Array,
    default: [],
  },
  followings: {
    type: Array,
    default: [],
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema);