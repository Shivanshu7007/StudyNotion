// const Razorpay = require("razorpay");

// exports.instance = new Razorpay({
// 	key_id: process.env.RAZORPAY_KEY,
// 	key_secret: process.env.RAZORPAY_SECRET,
// });
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: 'your_key_id_here',
  key_secret: 'your_key_secret_here',
  // Other configuration options if needed
});
