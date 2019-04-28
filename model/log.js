let mongoose = require('mongoose');

// Log Schema
let logSchema = mongoose.Schema({
	nrp:{
		type: String,
		required: true
	},
	gate:{
		type: String,
		required: true
    },	
	time:{
		type: Date,
		required: true
	},	   
	status:{
		type: String,
		required: true
	},		 
});

let Log = module.exports = mongoose.model('log', logSchema);