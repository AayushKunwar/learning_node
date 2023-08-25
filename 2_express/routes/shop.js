const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
	// console.log("in the main file");
	res.send("<h1>Welcome and Hello</h1>");
});

module.exports = router;
