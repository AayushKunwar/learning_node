// let sql = require("mssql");
import sql from "mssql";

let config = {
	server: "localhost",
	database: "commentsdb",
	user: "sa",
	password: "root",
};

function getEmp() {
	let conn = sql.connect(config);
	let req = new sql.Request(conn);
	conn.connect(function (err) {
		if (err) {
			console.log(err);
			return;
		}
		req.query(
			"Select * from dbo.main_comment_list",
			function (err, recordSet) {
				if (err) {
					console.log(err);
				} else {
					console.log(recordSet);
				}
			}
		);
		conn.close();
	});
}
getEmp();
