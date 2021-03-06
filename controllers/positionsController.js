// ./controllers/positionsController.js
const db = require(`../models`);
const UNPROCESSABLE_ENTITY = 422;

// Defining methods for the positionsController
module.exports = {
	findAll: function(req, res) {
		db.Position.find(req.query)
		 	.sort({ stockFullName: 1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(UNPROCESSABLE_ENTITY).json(err));
	},
	findById: function(req, res) {
		db.Position.findById(req.params.id)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(UNPROCESSABLE_ENTITY).json(err));
	},
	create: function(req, res) {
		db.Position.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(UNPROCESSABLE_ENTITY).json(err));
	},
	update: function(req, res) {
		db.Position.findOneAndUpdate(
			{
				_id: req.params.id
			},
			req.body,
			{
				new: true,
			}
		).then((dbModel) => res.json(dbModel))
		.catch((err) => res.status(UNPROCESSABLE_ENTITY).json(err));
	},
	remove: function(req, res) {
		db.Position.findById(
			{
				_id: req.params.id
			}
		).then((dbModel) => dbModel.remove())
		.then((dbModel) => res.json(dbModel))
		.catch((err) => res.status(UNPROCESSABLE_ENTITY).json(err));
	},
};