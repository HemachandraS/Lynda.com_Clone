const express = require("express");
const router = express.Router();
const CSSCourse = require("../models/css_course.model");


router.get("/", async (req, res) => {
  try {
    const css_post = await CSSCourse.find().lean().exec();
    return res.status(200).send(css_post);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const css_post = await CSSCourse.create(req.body)
    return res.status(200).send(css_post);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});

module.exports=router