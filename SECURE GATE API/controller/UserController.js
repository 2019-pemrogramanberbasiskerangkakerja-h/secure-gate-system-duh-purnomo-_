
const express = require('express');
const router = express.Router();
var connection = require('../config/database');
var md5 = require('md5');

exports.login = function(req, res){
	
	var nrp = req.body.nrp.toLowerCase();
	var password = md5(req.body.password);
	var gate = req.body.gate.toLowerCase();
	
	connection.query('select * from user where nrp = ?',[nrp],function(error, row, fields) {
		if(error) {
			res.send(error);
		}
		else {

			if(row.length <= 0){
				var respond = {};
				respond["error"] = 1;
				respond["message"] = "NRP/Password Salah!";
				obj = JSON.stringify(respond);
				res.send(obj);
			}else{
				var grup = row[0].grup_id;
				connection.query('select * from grup,gate where grup.group_name = ? and grup.gate_id = gate.gate and gate.gate = ?',[grup, gate],function(error, row, fields) {
					if(error) {
						res.send(error);
					}
					else {
						// res.send(row.length <= 0);
						if(row.length <= 0){
							connection.query('insert into log (nrp, gate, action, status) values (?,?,?,?)', [nrp, gate,"Masuk", "Tidak Ada Akses"], function(error, row, fields) {
								if(error) {
									res.send(error);
								}
								else {
									var respond = {};
									respond["error"] = 1;
									respond["message"] = "Anda tidak memiliki Akses";
									obj = JSON.stringify(respond);
									res.send(obj);							
								}
							});							
						}else{
							var open = row[0].open;
							var close = row[0].close;
				
							if(Date.parse(open) <= Date.now() && Date.now() <= Date.parse(close)){
								connection.query('insert into log (nrp, gate, action, status) values (?,?,?,?)', [nrp, gate,"Masuk", "Berhasil"], function(error, row, fields) {
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
								connection.query('insert into log (nrp, gate, action, status) values (?,?,?,?)', [nrp, gate,"Masuk", "Gagal"], function(error, row, fields) {
									if(error) {
										res.send(error);
									}
									else {
										var respond = {};
										respond["error"] = 1;
										respond["message"] = "Gate Sedang Tutup!";
										obj = JSON.stringify(respond);
										res.send(obj);
									}
								});
							}							
						}			
					}
				});				
			}
		}
	});
}

exports.adduser = function(req, res){

	var nrp = req.body.nrp.toLowerCase();
	var password = md5(req.body.password);
	var role = '0';
	var token = md5(new Date());
	var group = req.body.group.toLowerCase();

	connection.query('insert into user (nrp, password, role, token, grup_id) values (?,?,?,?,?)', [nrp, password, role, token, group], function(error, row, fields) {
		if(error) {
			var respond = {};
			respond["error"] = 1;
			respond["message"] = "User Sudah Tesedia";
			obj = JSON.stringify(respond);
			res.send(obj);
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

	var nrp = req.params.id.toLowerCase();
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
	
	var nrp = req.params.id.toLowerCase();

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
	
	var nrp = req.body.nrp.toLowerCase();
	var group = req.body.group.toLowerCase();

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

exports.getlogs = function(req, res){

	connection.query('select * from log',function(error, row, fields) {
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
