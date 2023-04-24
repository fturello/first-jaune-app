const EntitySchema = require("typeorm").EntitySchema;

// create entity schema for Wilder entity

module.exports = new EntitySchema({
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
	},
});
