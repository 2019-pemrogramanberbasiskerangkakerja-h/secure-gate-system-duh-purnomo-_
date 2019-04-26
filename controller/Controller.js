
const express = require('express');
const router = express.Router();

let Log = require('../model/log');
let User = require('../model/user');

exports.home = function(req, res){

	if(req.session.nrp === '-'){
		req.session.nrp = '-';
		res.redirect('/login');
	}else{
		if(req.session.role === '0'){
			var nrp = req.session.nrp;
			res.redirect('/admin');			
		}
		var nrp = req.session.nrp;
		res.render('home',{nrp:nrp});
	}
}

exports.login = function(req, res){
	res.render('login');
}

exports.dologin = function(req, res){

	let nrp2 = req.body.nrp;
	let password2 = req.body.password;

	User.findOne({nrp:nrp2, password:password2})
	.then((data)=>{
		if(data === null){;
			req.session.nrp = '-';
		   res.redirect('/login');
	   }else{
			req.session.nrp = nrp2;
			req.session.role = data.role;
		   console.log("is null")
		   res.redirect('/');
	   }
	})
   .catch((err)=>{
	   console.log("no data");
   });	
	
}


exports.dologout = function(req, res){
	req.session.nrp = '-';
   res.redirect('/login');
}