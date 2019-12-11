const Model = require('../model/Stock');

module.exports = {
	getStock: (req, res) => {
		Model.getStock(req.query, (dbRes, code) => {
	        res.status(code).send(dbRes);
	   });
	},
}