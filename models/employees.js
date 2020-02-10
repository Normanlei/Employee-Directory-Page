const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;


const employeesSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a valid name"
  },
  gender: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: 'Email address is required',
    validate: [validator.isEmail, 'Please fill a valid email address'],
  },
  phone: {
    type: String,
    trim: true,
    unique: true,
    required: 'Phone number is required',
  },
  department: {
    type: String,
    required: true
  },
  image :{
    type: String,
    required: true
  }
});

const Employees = mongoose.model("Employees", employeesSchema);

module.exports = Employees;
