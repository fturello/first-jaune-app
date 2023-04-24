const dataSource = require("../utils");

const Wilder = require("../entities/Wilder");

const read = (req, res) => {
	dataSource
		.getRepository(Wilder)
		.find()
		.then((wilders) => {
			res.json(wilders);
		})
		.catch((e) => {
			console.error(e);
			res.status(500).send("Error while fetching wilders");
		});
};

const create = (req, res) => {
	dataSource
		.getRepository(Wilder)
		.save(req.body)
		.then(() => {
			res.status(201).send("Wilder created");
		})
		.catch((e) => {
			console.error(e);
			res.status(500).send("Error while creating wilder");
		});
};

module.exports = { read, create };
