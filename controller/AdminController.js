
const express = require('express');
const router = express.Router();

let Log = require('../model/log');
let User = require('../model/user');
let Gate = require('../model/gate');

exports.addrule = function(req, res){

	if(req.session.nrp === '-'){
		req.session.nrp = '-';
		res.redirect('/login');
	}else{
		var nrp = req.session.nrp;
		res.render('home',{nrp:nrp});
	}
}


exports.index = function(req, res){



	if(req.session.nrp === '-'){
		req.session.nrp = '-';
		res.redirect('/login');
	}else{
        var nrp = req.session.nrp;
        
        global.gates;
        global.users;
        
        Gate.find({})
        .then((data)=>{
            gates = data
         })
        .catch((err)=>{
          console.log(err);
        })

        User.find({})
        .then((data2)=>{
            users = data2
         })
        .catch((err2)=>{
          console.log(err2);
        })

        res.render('admin',{
            nrp:nrp,
            user:global.users,
            gate:global.gates
        });        
	}
}
