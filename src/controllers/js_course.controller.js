const express = require("express");
const router = express.Router();


const js_courses = require("../models/js_course.model");

router.get("/", async (req, res) => {
    try {
      const js_course = await js_courses.find().lean().exec();
      return res.status(200).send(js_course);
    } catch (error) {
      return res.status(200).send(error.message);
    }
  });

  
  router.post("/", async (req, res) => {
    try {
      const js_course = await js_courses.create(req.body)
      return res.status(200).send(js_course);
    } catch (error) {
      return res.status(200).send(error.message);
    }
  });
  
  module.exports=router;
