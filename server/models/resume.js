const mongoose = require("mongoose");
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
    phone: Number
  },
  personalDescription: {
    // title: String,
    value: String
  },
  experience: [{
    title: String,
    company: String,
    // description: String,
    startDate: Date,
    endDate: Date
  }],
  education: [{
    title: String,
    // address: String,
    description: String,
    startDate: Date,
    endDate: Date
    // major: String,
    // degree: String,
    // points: [{
    //   title: String
    // }]
  }],
  skills: [{
    title: String,
    description: String
  }],
  languages: [{
    title: String,
    // rank: {
    //   type: Number,
    //   default: 0
    // }
  }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
};

module.exports = mongoose.model("Resume", schema);
