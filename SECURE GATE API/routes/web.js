const express = require('express');
const router = express.Router();

// DEKLARASI CONTROLLER

const GateController = require('../controller/GateController');


// ROUTINGNYA

router.post('/gate', GateController.addgate);
router.get('/gates', GateController.getgates);
router.get('/gate/:id', GateController.getgate);
router.put('/gate', GateController.updategate);
router.delete('/gate/:id', GateController.deletegate);

module.exports = router;
