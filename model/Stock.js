const { Stock } 	= require('./Schema');

const fetch 		= require('node-fetch');

const getStock = (stockData, cb) => {
	console.log('Stock.js getStock', stockData)

	Stock.findOne({'symbol': stockData.stock.toUpperCase()}, (err, doc) => {
		if (err) cb(err, 400);
		if (doc == null) {
			fetch(`https://repeated-alpaca.glitch.me/v1/stock/${stockData.stock}/quote`)
	      	.then(res => res.json())
	  		.then(body => {
	  			// Stock is not in DB. Create new Stock instance by fetching
	  			// and save to DB
				// console.log('NOT FOUND, SEND FETCH', body);
				const newStock = new Stock({
					symbol: body.symbol,
					price: body.latestPrice,
					likes: 0
				})

				newStock.save(err => {
					if (err) {
						cb(err, 400)
					} else {
	  					cb(newStock, 200)
					}
				});
	  		});

		} else {
			// Stock was found in DB. Return stock information
			// console.log('STOCK FOUND, SEND BACK INFO', doc, stockData);
			cb(doc, 200)
		}
	});
}

module.exports = {
  getStock
}