
const mongoose = require("mongoose");

const js_courseSchema = new mongoose.Schema(
  {
    img: { type: String, required: false },
    title: { type: String, required: false },
    creater: { type: String, required: false },
    level: { type: String, required: false },
    date: { type: String, required: false },
    decription: { type: String, required: false },
    no_learner: { type: String, required: false },
    video_link: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const JsCourse = mongoose.model("js_course", js_courseSchema);
module.exports = JsCourse;

