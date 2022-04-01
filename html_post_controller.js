const express = require("express");
const router = express.Router();
const HTML_Data = require("../models/html_post.model");


router.get("/", async (req, res) => {
  try {
    const html_post = await HTML_Data.find().lean().exec();
    return res.status(200).send(html_post);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const html_post = await HTML_Data.create(req.body)
    return res.status(200).send(html_post);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});

module.exports=router