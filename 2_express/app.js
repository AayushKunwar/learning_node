const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRouters = require("./routes/admin.js");
const shopRouters = require("./routes/shop.js");
// req -> middleware -> middleware -> response

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouters);

// here a the middleware, (use, post, get)
app.use("/", (req, res, next) => {
	// executed for starting with /
	// console.log("this always runs");
	next();
});

app.use(shopRouters);

// if not request handler, have a catch all handler
app.use((req, res, next) => {
	res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
// const server = http.createServer(app);

// server.listen(3000);
