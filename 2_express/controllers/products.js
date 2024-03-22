const products = []; // ofc array can be const, its only a const reference dummy

exports.getAddProduct = (req, res, next) => {
	// executed for starting with /
	// console.log("in another middleware");
	// res.send(
	// 	"<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add product</button></form>"
	// );
	// if sending response, dont do .next()

	// res.sendFile(path.join(rootDir, "views", "add-product.html"));

	res.render("add-product", {
		pageTitle: "Add Product",
		path: "/admin/add-product",
	});
};

exports.postAddProduct = (req, res, next) => {
	console.log(req.body);
	// this saves data for the whole node instance itself, all users, ;)
	products.push({ title: req.body.title });
	res.redirect("/");
};
