const Razorpay = require("razorpay");

exports.instance = new Razorpay({
	key_id: process.env.rzp_test_gZX227g9UcCxdC,
	key_secret: process.env.RAZORPAY_SECRET,
});
