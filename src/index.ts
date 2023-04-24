const express = require("express");

const app = express();

const port: number = 5000;

app.get("/", (req, res) => {
	console.log("A new request just hit the API !");
	res.send("Hello dear API client :)");
});

app.listen(port, (err) => {
	err
		? console.error(`Something bad happened ${err}`)
		: console.log(`Server is listening on port ${port}`);
});
