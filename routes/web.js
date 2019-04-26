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
router.post('/addrule', AdminController.addrule);




module.exports = router;
