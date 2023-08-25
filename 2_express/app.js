const express = require("express");
const bodyParser = require("body-parser");

const adminRouters = require("./routes/admin.js");
const shopRouters = require("./routes/shop.js");
// req -> middleware -> middleware -> response

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRouters);

// here is the middleware
app.use("/", (req, res, next) => {
	// executed for starting with /
	// console.log("this always runs");
	next();
});

app.use(shopRouters);

app.listen(3000);

// const server = http.createServer(app);

// server.listen(3000);
