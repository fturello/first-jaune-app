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

const update = (req, res) => {
	const id = req.params.id;
	const updates = req.body;
	dataSource
		.getRepository(Wilder)
		.update(id, updates)
		.then(() => {
			res.status(201).send("Wilder updated");
		})
		.catch((e) => {
			console.error(e);
			res.status(500).send("Error while updating wilder");
		});
};

const destroy = (req, res) => {
	const id = req.params.id;

	dataSource
		.getRepository(Wilder)
		.delete(id)
		.then(() => {
			res.status(201).send("Wilder deleted");
		})
		.catch((e) => {
			console.error(e);
			res.status(500).send("Error while deleting wilder");
		});
};

module.exports = { read, create, update, destroy };
