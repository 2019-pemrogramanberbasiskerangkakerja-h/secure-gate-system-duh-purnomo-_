let mongoose = require('mongoose');

// User Schema
let userSchema = mongoose.Schema({
	nrp:{
		type: String,
		require: true
	},
	password:{
		type: String,
		require: true
  },
	role:{
		type: String,
		require: true
  },    
	gateid:{
		type: String,
		require: true
  }
});

const User = module.exports = mongoose.model('user', userSchema);