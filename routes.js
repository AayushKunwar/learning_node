const fs = require("fs");

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;
	if (url === "/") {
		res.write("<html>");
		res.write("<head><title>My First page</title><head>");
		res.write(
			"<body><form action='/message' method='POST'><input type='test' name='message'><button type='submit'>Send it</button></form></body>"
		);
		// form sends all input as key-value pair
		// key is the name
		// value is the user input data
		res.write("</html>");
		return res.end();
	}

	if (url === "/message" && method === "POST") {
		const body = [];

		// on is an event-listener
		req.on("data", (chunk) => {
			console.log(chunk);
			body.push(chunk);
		});

		return req.on("end", () => {
			const parseBody = Buffer.concat(body).toString();
			const message = parseBody.split("=")[1];
			fs.writeFileSync("message.txt", message, (err) => {
				res.statusCode = 302;
				res.setHeader("Location", "/");
				return res.end();
			});
		});
	}

	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head><title>My First page</title><head>");
	res.write("<body><h1>Hello from my node.js</h1></body>");
	res.write("</html>");
	res.end(); // dont change the response after this
};

module.exports = requestHandler;
// to have multiple exports, make it an obj {key: function}
// OR
// module.exports.handler = function
//      module.exports.text = "hardCoded text"
// OR just write exports.handler = function
