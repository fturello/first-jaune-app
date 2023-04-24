const dataSource = require("../utils.js");

const Skill = require("../entities/Skill.js");

const read = async (req, res) => {
	try {
		const skills = await dataSource.getRepository(Skill).find();
		res.json(skills);
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while fetching skills");
	}
};

const create = async (req, res) => {
	try {
		await dataSource.getRepository(Skill).save(req.body);
		res.status(201).send("Skill created");
	} catch (e) {
		console.error(e);
		res.status(500).send("Error while creating skill");
	}
};

module.exports = { read, create };
