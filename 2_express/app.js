const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// const shopRouters = require("./routes/shop.js");
// const expressHbs = require("express-handlebars");
// req -> middleware -> middleware -> response

const app = express();

// global configuration value
// app.engine("handlebars", expressHbs.engine());
// app.set("view engine", "handlebars"); // pug is supported out of the box
// app.set("views", "views"); // where to find these templates, is default

app.set("view engine", "ejs"); // set ejs as engine
app.set("views", "views"); // views found in views folder (is default)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use("/admin", adminRoutes);

// here a the middleware, (use, post, get)
app.use("/", (req, res, next) => {
	// executed for starting with /
	// console.log("this always runs");
	next();
});

app.use("/shop", shopRoutes);

// if not request handler, have a catch all handler
app.use((req, res, next) => {
	res.status(404).render("404", {
		pageTitle: "404",
		content: "<h1>Page Not found</h1>",
	});
});

app.listen(3000);
// const server = http.createServer(app);

// server.listen(3000);
