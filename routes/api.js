/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect 		= require('chai').expect;

const controller 	= require('../controller/handleRequest');


// const MongoClient 	= require('mongodb');
// dotenv package allows us to read from .env file
// require('dotenv').config();

// const CONNECTION_STRING = process.env.DB;

// // MongoClient.connect(CONNECTION_STRING, function(err, db) {
// // 	if (err) console.log(`err ${err}`);
// // 	console.log(`connected to MongoDB`);
// // });


module.exports = function (app) {

  app.route('/api/stock-prices/')
    .get(function (req, res){
      console.log(`req ${Object.getOwnPropertyNames(req.query)}, res ${res}`);
      if (Object.getOwnPropertyNames(req.query) == "stock") {
      	controller.getStock(req, res);
      } else {
      	// controller.compareStocks(req, res);
      }
    });
    
};
