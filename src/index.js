const express = require("express");
const typeorm = require("typeorm");

const app = express();

const port = 5000;

const dataSource = new typeorm.DataSource({
	type: "sqlite",
	database: "./wildersdb.sqlite",
	synchronize: true,
	entity: [require("./entity/Wilder")],
});

app.get("/", (req, res) => {
	console.log("A new request just hit the API !");
	res.send("Hello dear API client :)");
});

const start = async () => {
	await dataSource.initialize();
	app.listen(port, () => console.log(`Server is running on port ${port}`));
};

start();
