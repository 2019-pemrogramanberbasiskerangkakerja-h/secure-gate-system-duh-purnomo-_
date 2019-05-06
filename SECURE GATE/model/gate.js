let mongoose = require('mongoose');

// User Schema
let gateSchema = mongoose.Schema({
	idgate:{
		type: String,
		require: true
	},
	start:{
		type: Date,
		require: true
    },
	end:{
		type: Date,
		require: true
    },          
});

const Gate = module.exports = mongoose.model('gate', gateSchema);