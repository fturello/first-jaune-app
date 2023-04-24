	const dataSource = require("../utils");

	const Wilder = require("../entities/Wilder");

	const read = async (req, res) => {
		try {
			const wilders = await dataSource.getRepository(Wilder).find();
			res.json(wilders);
		} catch (e) {
			console.error(e);
			res.status(500).send("Error while fetching wilders");
		}
	};

	const create = async (req, res) => {
		try {
			await dataSource.getRepository(Wilder).save(req.body);
			res.status(201).send("Wilder created");
		} catch (e) {
			console.error(e);
			res.status(500).send("Error while creating wilder");
		}
	};

	const update = async (req, res) => {
		try {
			const id = req.params.id;
			const updates = req.body;

			await dataSource.getRepository(Wilder).update(id, updates);
			res.status(201).send("Wilder updated");
		} catch (e) {
			console.error(e);
			res.status(500).send("Error while updating wilder");
		}
	};

	const destroy = async (req, res) => {
		try {
			const id = req.params.id;
			await dataSource.getRepository(Wilder).delete(id);
			res.status(201).send("Wilder deleted");
		} catch (e) {
			console.error(e);
			res.status(500).send("Error while deleting wilder");
		}
	};

	module.exports = { read, create, update, destroy };
