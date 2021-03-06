const express = require("express");
const app = express();
var cors = require("cors");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());
app.get("", (req, res) => { 
  res.status(200).send("welcome to lynda.com")
});
const { register, login } = require("./controllers/auth.controller");
const new_releasesController = require("./controllers/new_releases.controller");
const html_courseController = require("./controllers/html_course.controller");
const css_courseController = require("./controllers/css_course.controller");
const top_pick_courseController = require("./controllers/top_pick_course_controller");
const js_coursecontroler = require("./controllers/js_course.controller");
const popular_courseControler = require("./controllers/popular.controller");
const checkoutController = require("./controllers/checkout.controllers")
   /////////////////////////////////
                                            // app.set("view engine", "ejs");

app.post("/register", register);
app.post("/login", login);
app.use("/top_pick_course",top_pick_courseController);
app.use("/html_course", html_courseController);
app.use("/css_course", css_courseController);
app.use("/new_releases", new_releasesController);
app.use("/js_course", js_coursecontroler);
app.use("/popular_course", popular_courseControler);
app.use("/checkout", checkoutController); 

module.exports = app;

// HTML_Data = JSON.stringify(HTML_Data);
// console.log('HTML_Data:', HTML_Data)
