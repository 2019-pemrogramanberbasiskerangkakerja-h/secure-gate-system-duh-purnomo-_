//dbconnect ke mongodb
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tugasgate', { useNewUrlParser: true });
let db = mongoose.connection;
db.once('open', function(){
	console.log('Connected to mongodb');
});
db.on('error', function(err){
	console.log(err);
});
