let mongoose = require('mongoose');

// Log Schema
let logSchema = mongoose.Schema({
	user:{
		type: String,
		required: true
	},
	action:{
		type: String,
		required: true
    },	
	time:{
		type: Date,
		required: true
	},	    
});

let Log = module.exports = mongoose.model('log', logSchema);