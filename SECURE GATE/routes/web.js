const express = require('express');
const router = express.Router();

// DEKLARASI CONTROLLER
const GateController = require('../controller/GateController');
const GroupController = require('../controller/GroupController');

// ROUTINGNYA


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
