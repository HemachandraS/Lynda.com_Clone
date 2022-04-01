const express = require("express");
const router = express.Router();
const CssPost = require("../models/css_post.model");


router.get("/", async (req, res) => {
  try {
    const css_post = await CssPost.find().lean().exec();
    return res.status(200).send(css_post);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const css_post = await CssPost.create(req.body)
    return res.status(200).send(css_post);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});

module.exports=router