const EntitySchema = require("typeorm").EntitySchema;

// create entity schema for Wilder entity

const entitySchema = new EntitySchema({
	name: "Wilder",
	columns: {
		id: {
			primary: true,
			type: "int",
			generated: true,
		},
		name: {
			type: "text",
		},
		email: {
			type: "text",
		},
	},
});

module.exports = entitySchema;
