const Razorpay = require("razorpay");

exports.instance = new rzp_test_gZX227g9UcCxdC({
	key_id: process.env.RAZORPAY_KEY,
	key_secret: process.env.RAZORPAY_SECRET,
});
