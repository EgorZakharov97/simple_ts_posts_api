const mysql2 = require('mysql2');

let connection = mysql2.createPool({
	host: 'localhost',
	user: 'admin',
	password: 'admin!1',
	database: process.env.DB_DATABASE,
	connectionLimit: 10
})

let result = connection.query("SELECT * FROM simple_posts.posts", (err, rows, fields) => {
	console.log(rows);
	connection.end();
})
