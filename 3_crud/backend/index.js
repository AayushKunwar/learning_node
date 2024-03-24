import express from "express";
import sql from "mssql";
// cors middleware for cross-origin request
import cors from "cors";

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
let pool;

async function getEmp() {
	try {
		pool = await sql.connect(sqlConfig);
		console.log("db connection established");
	} catch (error) {
		console.log("got error: " + error);
	}
}
getEmp();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.json("hello this the backend");
});

app.get("/comments", async (req, res) => {
	const q = "select * from dbo.main_comment_list";
	let result = await pool
		.request()
		.query(q)
		.then((value) => {
			return value;
		});
	res.json(result.recordset);
});

app.post("/comments", (req, res) => {
	console.log(req.body);
	// return res.json(req.query);
	const q = `insert into dbo.main_comment_list (author, comment) values ('${req.body.author}', '${req.body.comment}')`;

	// why dont this work?
	// const values = [req.query.author, req.query.comment];

	pool.query(q, (err, data) => {
		if (err) {
			console.log("on no errer aayo");
			return res.json(err);
		}
		console.log("success babey");
		return res.json(data);
	});
});

app.listen(8800, () => {
	console.log("connected to backend!");
});
