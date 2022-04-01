const express = require("express");
const app = express();
var cors = require("cors");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());

const { register, login } = require("./controllers/auth.controller");
const new_releasesController = require("./controllers/new_releases.controller");
const html_post_controller = require("./controllers/html_post_controller");
const css_post_controller = require("./controllers/css_post_controller");
const top_pick_courseController = require("./controllers/top_pick_course_controller");
app.post("/register", register);
app.post("/login", login);
app.use("/top_pick_course",top_pick_courseController);
app.use("/html_post_controller", html_post_controller);
app.use("/css_post_controller", css_post_controller);
app.use("/new_releases", new_releasesController);
module.exports = app;

// HTML_Data = JSON.stringify(HTML_Data);
// console.log('HTML_Data:', HTML_Data)
