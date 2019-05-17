
const express = require('express');
const router = express.Router();
var connection = require('../config/database');
var md5 = require('md5');

exports.addgroup = function(req, res){

	var group = req.body.group.toLowerCase();;
	var gate = req.body.gate.toLowerCase();;

	connection.query('select * from grup where group_name = ? and gate_id = ?', [group, gate], function(error, row, fields) {
		if(error) {
			res.send(error);
		}
		else {
			if(row.length > 0){
				var respond = {};
				respond["error"] = 1;
				respond["message"] = "Group Sudah Tersedia";
				obj = JSON.stringify(respond);
				res.send(obj);
			}else{
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

	var group = req.params.id.toLowerCase();;

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
	
	var id = req.params.id;

	connection.query('delete from grup where id = ?',[id],function(error, row, fields) {
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
	var id = req.body.group;

	connection.query('update grup set gate_id = ? where id = ?', [gate, id], function(error, row, fields) {
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