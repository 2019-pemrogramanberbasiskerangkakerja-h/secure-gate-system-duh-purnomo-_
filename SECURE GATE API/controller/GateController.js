
const express = require('express');
const router = express.Router();
var connection = require('../config/database');
var md5 = require('md5');

exports.addgate = function(req, res){

	var gate = req.body.gate;
	var open = req.body.open;
	var close = req.body.close;

	connection.query('insert into gate (gate, open, close) values (?,?,?)', [gate, open, close], function(error, row, fields) {
		if(error) {
			res.send(error);
		}
		else {
			var respond = {};
			respond["error"] = 0;
			respond["message"] = row;
			obj = JSON.stringify(respond);
			res.send(obj);
		}
	});
}

exports.getgates = function(req, res){
	connection.query('select * from gate',function(error, row, fields) {
		if(error) {
			res.send(error);
		}
		else {
			var respond = {};
			respond["error"] = 0;
			respond["message"] = row;
			obj = JSON.stringify(respond);
			res.send(obj);
		}
	});
}

exports.getgate = function(req, res){

	var gate = req.params.id;
	connection.query('select * from gate where gate = ?',[gate],function(error, row, fields) {
		if(error) {
			res.send(error);
		}
		else {
			var respond = {};
			respond["error"] = 0;
			respond["message"] = row;
			obj = JSON.stringify(respond);
			res.send(obj);
		}
	});

}

exports.deletegate = function(req, res){
	
	var gate = req.params.id;

	connection.query('delete from gate where gate = ?',[gate],function(error, row, fields) {
		if(error) {
			res.send(error);
		}
		else {
			var respond = {};
			respond["error"] = 0;
			respond["message"] = row;
			obj = JSON.stringify(respond);
			res.send(obj);
		}
	});

}

exports.updategate = function(req, res){

	var gate = req.body.gate;
	var open = req.body.open;
	var close = req.body.close;

	connection.query('update gate set open = ?, close = ? where gate = ?', [open, close, gate], function(error, row, fields) {
		if(error) {
			res.send(error);
		}
		else {
			var respond = {};
			respond["error"] = 0;
			respond["message"] = row;
			obj = JSON.stringify(respond);
			res.send(obj);
		}
	});
}