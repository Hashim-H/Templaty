const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = {
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  title: String,
  isPublic: {
    type: Boolean,
    default: false
  },
  personalInfo: [{
    title: String,
    value: String
  }],
  experiences: [{
    title: String,
    address: String,
    description: String,
    startDate: Date,
    endDate: Date,
    points: [{
      title: String
    }]
  }],
  educations: [{
    title: String,
    address: String,
    description: String,
    startDate: Date,
    endDate: Date,
    major: String,
    degree: String,
    points: [{
      title: String
    }]
  }],
  skills: [{
    title: String,
    rank: {
      type: Number,
      default: 0
    }
  }],
  languages: [{
    title: String,
    rank: {
      type: Number,
      default: 0
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
};

module.exports = mongoose.model("Resume", schema);
