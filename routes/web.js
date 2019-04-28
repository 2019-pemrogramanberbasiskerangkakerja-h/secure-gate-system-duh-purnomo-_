const express = require('express');
const router = express.Router();

// DEKLARASI CONTROLLER
const Controller = require('../controller/Controller');
const AdminController = require('../controller/AdminController');

// ROUTINGNYA
router.get('/', Controller.home);
router.get('/login', Controller.login);
router.get('/logout', Controller.dologout);
router.post('/dologin', Controller.dologin);

router.get('/admin', AdminController.index);

router.post('/addgate', AdminController.addgate);
router.get('/deletegate/:id', AdminController.deletegate);
router.post('/updategate', AdminController.updategate);




module.exports = router;
