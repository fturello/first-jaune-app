const express = require("express");
const typeorm = require("typeorm");
const Wilder = require("./entity/Wilder");

const app = express();

const port = 5000;

const dataSource = new typeorm.DataSource({
	type: "sqlite",
	database: "./wildersdb.sqlite",
	synchronize: true,
	entities: [require("./entity/Wilder")],
});

app.get("/", (req, res) => {
	console.log("A new request just hit the API !");
	res.send("Hello dear API client :)");
});

const start = async () => {
	await dataSource.initialize();
	dataSource.getRepository(Wilder).save({ name: "First Wilder" });
	app.listen(port, () => console.log(`Server is running on port ${port}`));
};

start();
