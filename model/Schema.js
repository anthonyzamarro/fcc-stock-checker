const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
	if (err) console.log('db error', err);
	console.log('connected to MongoDB');
});

const Schema = mongoose.Schema;

const stockSchema = new Schema({
	symbol: String,
	price: Number,
	likes: Number
})

const Stock = mongoose.model('Stock', stockSchema);

module.exports = { Stock };