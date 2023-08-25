const express = require("express");

const router = express.Router();

router.use("/add-product", (req, res, next) => {
	// executed for starting with /
	// console.log("in another middleware");
	res.send(
		"<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add product</button></form>"
	);
	// if sending response, dont do .next()
});

// post and get uses exact path
router.post("/product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
});

module.exports = router;
