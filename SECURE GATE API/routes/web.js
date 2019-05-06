const express = require('express');
const router = express.Router();

// DEKLARASI CONTROLLER
const UserController = require('../controller/UserController');
const GateController = require('../controller/GateController');
const GroupController = require('../controller/GroupController');

// ROUTINGNYA

router.post('/login', UserController.login);

router.post('/user', UserController.adduser);
router.get('/users', UserController.getusers);
router.get('/user/:id', UserController.getuser);
router.delete('/user/:id', UserController.deleteuser);
router.put('/user', UserController.setgrupuser);

router.post('/gate', GateController.addgate);
router.get('/gates', GateController.getgates);
router.get('/gate/:id', GateController.getgate);
router.put('/gate', GateController.updategate);
router.delete('/gate/:id', GateController.deletegate);

router.post('/group', GroupController.addgroup);
router.get('/groups', GroupController.getgroup);
router.get('/group/:id', GroupController.getgroup);
router.put('/group', GroupController.updategroup);
router.delete('/group/:id', GroupController.deletegroup);

module.exports = router;
