const express = require("express");
const router = express.Router();
const NewReleases = require("../models/new_releases.model");


router.get("/", async (req, res) => {
  try {
    const new_releases = await NewReleases.find().lean().exec();
    return res.status(200).send(new_releases);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const new_releases = await NewReleases.create(req.body)
    return res.status(200).send(new_releases);
  } catch (error) {
    return res.status(200).send(error.message);
  }
});

module.exports=router