const express = require('express');
const router = express.Router();

// DEKLARASI CONTROLLER
const UserController = require('../controller/UserController');
const GateController = require('../controller/GateController');
const GroupController = require('../controller/GroupController');

// ROUTINGNYA
// Tipe Data
// String = nrp,password,gate,group
// Timestamp  = open, close

router.post('/login', UserController.login);
// Form Body (nrp, password, gate) (untuk login)

router.post('/user', UserController.adduser);
// Form Body (nrp, password, group) (tambah user)

router.get('/users', UserController.getusers);
// Form Body (tidak ada) (tampilkan semua user)

router.get('/user/:id', UserController.getuser);
// Form Body (tidak ada) (tampilan 1 user)

router.delete('/user/:id', UserController.deleteuser);
// Form Body (tidak ada) (delete user)

router.put('/user', UserController.setgrupuser);
// Form Body (nrp, group) (set group pada user)

router.post('/gate', GateController.addgate);
// Form Body (gate, open, close) (tambah gate)

router.get('/gates', GateController.getgates);
// Form Body (tidak ada) (lihat semua gate)

router.get('/gate/:id', GateController.getgate);
// Form Body (tidak ada) (lihat 1 gate)

router.put('/gate', GateController.updategate);
// Form Body (gate, open, close) (update gate)

router.delete('/gate/:id', GateController.deletegate);
// Form Body (tidak ada) (hapus gate)

router.post('/group', GroupController.addgroup);
// Form Body (group, gate) (tambah group)

router.get('/groups', GroupController.getgroups);
// Form Body (tidak ada) (lihat group)

router.get('/group/:id', GroupController.getgroup);
router.put('/group', GroupController.updategroup);
router.delete('/group/:id', GroupController.deletegroup);

module.exports = router;
