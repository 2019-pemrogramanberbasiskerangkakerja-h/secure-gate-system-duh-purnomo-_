
const express = require('express');
const router = express.Router();
var connection = require('../config/database');
var md5 = require('md5');

exports.login = function(req, res){
	
	var nrp = req.body.nrp;
	var password = md5(req.body.password);
	var gate = req.body.gate;

	connection.query('select user.nrp, grup.gate_id, gate.open, gate.close from user, grup, gate where user.nrp = ? and user.password = ? and grup.group_name = user.grup_id and grup.gate_id = ? and grup.gate_id = gate.gate', [nrp, password, gate], function(error, row, fields) {

		if(error) {
			res.send(error);
		}
		else {

			if(row.length <= 0){
				var respond = {};
				respond["error"] = 1;
				respond["message"] = "NRP/Password Salah!";
				obj = JSON.stringify(row);
				res.send(obj);
			}else{

				var open = row[0].open;
				var close = row[0].close;
	
				if(Date.parse(open) <= Date.now() && Date.now() <= Date.parse(close)){
					
					connection.query('insert into log (nrp, action, status) values (?,?,?)', [nrp, "Masuk", "Berhasil"], function(error, row, fields) {
						if(error) {
							res.send(error);
						}
						else {
							var respond = {};
							respond["error"] = 0;
							respond["message"] = "Berhasil Masuk Gate";
							obj = JSON.stringify(respond);
							res.send(obj);
						}
					});
	
				}else{
	
					connection.query('insert into log (nrp, action, status) values (?,?,?)', [nrp, "Masuk", "Gagal"], function(error, row, fields) {
						if(error) {
							res.send(error);
						}
						else {
							var respond = {};
							respond["error"] = 1;
							respond["message"] = "Gagal Masuk Gate";
							obj = JSON.stringify(respond);
							res.send(obj);
						}
					});
				}
			}
		}
	});
}

exports.adduser = function(req, res){

	var nrp = req.body.nrp;
	var password = md5(req.body.password);
	var role = '0';
	var token = md5(new Date());
	var group = req.body.group;

	connection.query('insert into user (nrp, password, role, token, grup_id) values (?,?,?,?,?)', [nrp, password, role, token, group], function(error, row, fields) {
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

exports.getusers = function(req, res){

	connection.query('select * from user',function(error, row, fields) {
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

exports.getuser = function(req, res){

	var nrp = req.params.id;
	connection.query('select * from user where nrp = ?',[nrp],function(error, row, fields) {
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

exports.deleteuser = function(req, res){
	
	var nrp = req.params.id;

	connection.query('delete from user where nrp = ?',[nrp],function(error, row, fields) {
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

exports.setgrupuser = function(req, res){
	
	var nrp = req.body.nrp;
	var group = req.body.group;

	connection.query('update user set grup_id = ? where nrp = ?',[group, nrp],function(error, row, fields) {
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
