const path = require("path");
const express = require("express");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
	// executed for starting with /
	// console.log("in another middleware");
	// res.send(
	// 	"<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add product</button></form>"
	// );
	// if sending response, dont do .next()

	res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// post and get uses exact path
router.post("/add-product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
});

module.exports = router;
