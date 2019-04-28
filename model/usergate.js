let mongoose = require('mongoose');

// User Schema
let usergateSchema = mongoose.Schema({
	nrp:{
		type: String,
		require: true
	},
	idgate:{
		type: String,
		require: true
  },       
});

const Usergate = module.exports = mongoose.model('usergate', usergateSchema);