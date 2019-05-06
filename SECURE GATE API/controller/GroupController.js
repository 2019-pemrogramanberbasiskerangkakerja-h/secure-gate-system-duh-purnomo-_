
const express = require('express');
const router = express.Router();
var connection = require('../config/database');
var md5 = require('md5');

exports.addgroup = function(req, res){

	var group = req.body.group;
	var nrp = req.body.nrp;
	var gate = req.body.gate;

	connection.query('insert into group (group, gate, nrp) values (?,?,?)', [group, gate, nrp], function(error, row, fields) {
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

exports.getgroups = function(req, res){
	connection.query('select * from group',function(error, row, fields) {
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

exports.getgroup = function(req, res){

	var group = req.params.id;
	connection.query('select * from group where group = ?',[group],function(error, row, fields) {
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

exports.deletegroup = function(req, res){
	
	var group = req.params.id;

	connection.query('delete from group where group = ?',[group],function(error, row, fields) {
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

exports.deletegroup = function(req, res){
	
	var group = req.params.id;

	connection.query('delete from group where group = ?',[group],function(error, row, fields) {
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

exports.updategroup = function(req, res){

	var group = req.body.group;
	var open = req.body.open;
	var close = req.body.close;

	connection.query('update group set open = ?, close = ? where group = ?', [open, close, group], function(error, row, fields) {
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