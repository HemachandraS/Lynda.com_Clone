const express = require("express");
const router = express.Router();
const TopPickCourse = require("../models/top_pick_course.model");


router.get("/", async (req, res) => {
  try {
    const top_pick_course = await TopPickCourse.find().lean().exec();
    return res.status(200).send(top_pick_course);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const top_pick_course = await TopPickCourse.create(req.body)
    return res.status(200).send(top_pick_course);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});

module.exports=router