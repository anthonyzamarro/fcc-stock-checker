const Model = require('../model/Stock');

module.exports = {
	getStock: (req, res) => {
		Model.getStock(req.query, (dbRes, code) => {
			// console.log('handleRequest: getStock', req.query.stock, res)
	        res.status(code).send(dbRes);
	   });
	},
}