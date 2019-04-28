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

router.post('/adduser', AdminController.adduser);
// router.get('/deleteuser/:id', AdminController.deleteuser);
// router.get('/deleteusergate/:id', AdminController.deleteusergate);
// router.post('/addusergate', AdminController.addusergate);



module.exports = router;
