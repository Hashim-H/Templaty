const mongoose = require("mongoose");
const moment = require("moment");
const { Schema } = mongoose;

const schema = {
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  title: String,
  isPublic: {
    type: Boolean,
    default: false
  },
  personalInfo: {
    name: String,
    job: String,
    email: String,
    phone: String
  },
  personalDescription: {
    // title: String,
    value: String
  },
  experience: [{
    title: String,
    company: String,
    // description: String,
    startDate: {type: Date, get: prettyDate},
    endDate: {type: Date, get: prettyDate}
  }],
  education: [{
    title: String,
    description: String,
    startDate: {type: Date, get: prettyDate} ,
    endDate: {type: Date, get: prettyDate}
  }],
  skills: [{
    title: String,
    description: String
  }],
  languages: [{
    title: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
};

function prettyDate(date){
  return moment(date).format("MMM YYYY")
}

module.exports = mongoose.model("Resume", schema);
