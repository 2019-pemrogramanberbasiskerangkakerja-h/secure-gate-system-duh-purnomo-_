
const express = require('express');
const router = express.Router();

let Log = require('../model/log');
let User = require('../model/user');
let Gate = require('../model/gate');
let Usergate = require('../model/usergate');

exports.home = function(req, res){

	if(req.session.nrp === '-' || req.session.nrp === 'undefined'){
		req.session.nrp = '-';
		res.redirect('/login');
	}else{
		if(req.session.role === '0'){
			var nrp = req.session.nrp;
			res.redirect('/admin');			
		}
		var nrp = req.session.nrp;
		var gate = req.session.gate;
		res.render('home',{nrp:nrp, gate:gate});
	}
}

exports.login = function(req, res){


	global.gates;

	Gate.find({})
	.then((data2)=>{
		gates = data2
	 })
	.catch((err2)=>{
	  console.log(err2);
	})


	res.render('login',{
		gate:global.gates
	});   
}

exports.dologin = function(req, res){

	let nrp2 = req.body.nrp;
	let password2 = req.body.password;
	let gate2 = req.body.gate;

	User.findOne({nrp:nrp2, password:password2})
	.then((data)=>{
		if(data === null){;
			req.session.nrp = '-';
		   res.redirect('/login');
	   }else{
			
			req.session.nrp = nrp2;
			req.session.gate = gate2;
			req.session.role = data.role;			

			Usergate.findOne({idgate:gate2, nrp:nrp2})
			.then((data)=>{
				if(data){
					Gate.findOne({idgate:gate2})
					.then((data)=>{
						 console.log("hehe"+data)
						 console.log(Date.parse(data.start))
						 console.log(Date.parse(data.end))
						 console.log(Date.now())
						 console.log(Date.parse(data.start) < Date.now() && Date.now() < Date.parse(data.end))
						 if(Date.parse(data.start) < Date.now() && Date.now() < Date.parse(data.end)){ 
							res.redirect('/');				 
						 }else{
							req.session.nrp = '-';
							req.session.gate = '-';
							req.session.role = '-';
							res.redirect('/login');
						 }			 
					 })
					.catch((err)=>{
					  console.log(err);
					  res.redirect('/login');
					})
				}else{
					res.redirect('/login');
				}
			 })
			.catch((err)=>{
			  	res.data(err)
			})

	   }
	})
   .catch((err)=>{
	   console.log(err);
   });	
	
}


exports.dologout = function(req, res){
	req.session.nrp = '-';
   res.redirect('/login');
}