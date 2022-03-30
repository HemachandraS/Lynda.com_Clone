const express = require("express");
const router = express.Router();
const HTMLCourse = require("../models/html_course.model");


router.get("/", async (req, res) => {
  try {
    const html_course = await HTMLCourse.find().lean().exec();
    return res.status(200).send(html_course);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const html_course = await HTMLCourse.create(req.body)
    return res.status(200).send(html_course);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});

module.exports=router