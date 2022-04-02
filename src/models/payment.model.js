const mongoose = require("mongoose");
const paySchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  card_number: { type: String, required: true },
  exp: { type: String, required: true },
  sec_code: { type: String, required: true },
  country: { type: String, required: false },
  postal: { type: String, required: true },
  gst: { type: String, required: true },
  status: { type: String, required: true , default:true},
},
{
  versionKey: false,
  timestamps: true
});

const Payment = mongoose.model("paydb", paySchema);

module.exports = Payment;