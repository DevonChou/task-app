const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    trim: true,
    validate: {
      validator: (value) => !value.toLowerCase().includes('password'),
      message: 'Password cannot contain "password"',
    },
  },
  age: {
    type: Number,
    default: 0,
    min: [0, 'Age must be a positive number'],
  },
});

module.exports = User;
