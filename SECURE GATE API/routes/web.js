const express = require('express');
const router = express.Router();

// DEKLARASI CONTROLLER
const UserController = require('../controller/UserController');
const GateController = require('../controller/GateController');
const GroupController = require('../controller/GroupController');

router.get('/logs', UserController.getlogs);
router.get('/', UserController.getlogs);
router.post('/login', UserController.login);
router.post('/users', UserController.adduser);
router.get('/users', UserController.getusers);
router.get('/users/:id', UserController.getuser);
router.delete('/users/:id', UserController.deleteuser);
router.put('/users', UserController.setgrupuser);

router.post('/gates', GateController.addgate);
router.get('/gates', GateController.getgates);
router.get('/gates/:id', GateController.getgate);
router.put('/gates', GateController.updategate);
router.delete('/gates/:id', GateController.deletegate);

router.post('/groups', GroupController.addgroup);
router.get('/groups', GroupController.getgroups);
router.get('/groups/:id', GroupController.getgroup);
router.put('/groups', GroupController.updategroup);
router.delete('/groups/:id', GroupController.deletegroup);

module.exports = router;
