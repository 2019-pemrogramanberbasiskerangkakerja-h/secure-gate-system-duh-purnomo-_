
const express = require('express');
const router = express.Router();
var connection = require('../config/database');
var md5 = require('md5');

exports.addgroup = function(req, res){

	var group = req.body.group;
	var gate = req.body.gate;

	connection.query('insert into grup (group_name, gate_id) values (?,?)', [group, gate], function(error, row, fields) {
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
	connection.query('select * from grup',function(error, row, fields) {
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

	connection.query('select * from grup where group_name = ?',[group],function(error, row, fields) {
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

	connection.query('delete from grup where group_name = ?',[group],function(error, row, fields) {
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

	
	var gate = req.body.gate;
	var group = req.body.group;

	connection.query('update grup set gate_id = ? where group_name = ?', [gate, group], function(error, row, fields) {
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