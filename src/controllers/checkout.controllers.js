const express = require("express");

const router = express.Router();
const Payment = require("../models/payment.model");

                                                                                  //                                             // router.get("", async (req, res) => {
                                                                                  //                                             //   return res.render("HTML/checkout.ejs");
                                                                                  //                                             // });
                                                                                  // router.post("/", async (req, res) => {
                                                                                  // try {
                                                                                  //   let c_num = req.body.card_number ;
                                                                                  //   let postal = req.body.postal ;
                                                                                  //  if  ( c_num.length= 16 &&  postal.length == 6) {
                                                                                  //     const payment = await Payment.create({
                                                                                  //       first_name: req.body.first_name,
                                                                                  //       last_name: req.body.last_name,
                                                                                  //       card_number: req.body.card_number,
                                                                                  //       exp: req.body.exp,
                                                                                  //       sec_code: req.body.sec_code,
                                                                                  //       country: req.body.country,
                                                                                  //       postal: req.body.postal,
                                                                                  //       gst: req.body.gst,
                                                                                  //     });
                                                                                  //     const data = await payment.save();
                                                                                  //     console.log(data);
                                                                                  //     return res.send(payment) 
                                                                                  //                                           // return res.render(MR.mainpage  {HTML/something})  =======================>
                                                                                  //                                           // =>change send to render
                                                                                  //                                           // } else {
                                                                                  //                                           //   // await showAlert ;
                                                                                  //                                           //   return res.send("erroooooorrrrrrrrrrrrrr");
                                                                                  //                                           //}
                                                                                  // } }
                                                                                  // catch (error) {
                                                                                  //   return res.send(error)
                                                                                  // }



                                                                                  // });

router.post("/", async (req, res) => {
try {
const payment = await Payment.create(req.body)
return res.status(200).send(payment);
} catch (error) {
return res.status(200).send(error.message);
}
});
module.exports = router;
