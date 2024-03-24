import express from "express";
import sql from "mssql";

const sqlConfig = {
	user: "sa",
	password: "root",
	database: "commentsdb",
	server: "LAPTOP-B82C09T0",
	pool: {
		max: 10,
		min: 0,
	},
	options: {
		encrypt: false,
		trustServerCertificate: true,
	},
};

const app = express();
async function getEmp() {
	try {
		console.log("helo");
		let pool = await sql.connect(sqlConfig);
		const result = await pool
			.request()
			.query("select * from dbo.main_comment_list");
		console.log(result);
	} catch (error) {
		console.log("got error: " + error);
	}
}
getEmp();

app.listen(8800, () => {
	console.log("connected to backend!");
});
