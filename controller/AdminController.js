
const express = require('express');
const router = express.Router();

let Log = require('../model/log');
let User = require('../model/user');
let Gate = require('../model/gate');
let Usergate = require('../model/usergate');

exports.addgate = function(req, res){
    Gate.findOne({ idgate: req.body.idgate }) 
    .then((doc) => {
       if (doc) {
         console.log(doc);
         res.redirect('/admin');
       } else {
         console.log("no data exist for this id");
         let newgate = new Gate({idgate:req.body.idgate, start:req.body.start, end:req.body.end}); // this is modal object.
         newgate.save()
           .then((data)=> {
             console.log(data);
             res.redirect('/admin');
            })
           .catch((err)=> {
             console.log(err);
             res.redirect('/admin');
           })         
       }
    })
   .catch((err) => {
     console.log(err);
     res.redirect('/admin');
    });
}

exports.deletegate = function(req, res){
//    res.send(req.params);
   Gate.findOneAndRemove({_id: req.params.id})
     .then((docs)=>{
        if (err) {
            res.send(err);
        }else{
            res.redirect('/admin');
        }
        
   }).catch((err)=>{
    console.log(err)
    res.redirect('/admin');
   })    
}

exports.updategate = function(req, res){
    // res.send(req.body.start);
    Gate.findOneAndUpdate({_id: req.body.id}, {$set:{start:req.body.start, end:req.body.end}}, {new: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
        res.redirect('/admin');
        console.log(doc);
    });
}

exports.index = function(req, res){

	if(req.session.nrp === '-'){
		req.session.nrp = '-';
		res.redirect('/login');
	}else{
        var nrp = req.session.nrp;
        
        global.gates;
        global.users;
        global.usergates;
        
        Gate.find({})
        .then((data)=>{
            gates = data
         })
        .catch((err)=>{
          console.log(err);
        })

        User.find({})
        .then((data2)=>{
            users = data2
         })
        .catch((err2)=>{
          console.log(err2);
        })

        Usergate.find({})
        .then((data2)=>{
            usergates = data2
         })
        .catch((err2)=>{
          console.log(err2);
        })

        res.render('admin',{
            nrp:nrp,
            user:global.users,
            gate:global.gates,
            usergates:global.usergates
        });        
	}

}

  exports.addusergate = function(req, res){

    Usergate.findOne({idgate:req.body.gate, nrp:req.body.nrp}) 
    .then((doc) => {
       if (doc) {
        //  res.send(doc)
         res.redirect('/admin');
       } else {
         console.log("no data exist for this id");
         let newusergate = new Usergate({idgate:req.body.gate, nrp:req.body.nrp}); // this is modal object.
         newusergate.save()
           .then((data)=> {
            //  res.send(data)
             res.redirect('/admin');
            })
           .catch((err)=> {
            //  res.send(err)
             res.redirect('/admin');
           })         
       }
    })
   .catch((err) => {
     console.log(err);
     res.redirect('/admin');
    });       
  }  

  exports.deleteusergate = function(req, res){
   Usergate.findOneAndRemove({_id: req.params.id})
     .then((docs)=>{
        if (err) {
            res.send(err);
        }else{
            res.redirect('/admin');
        }
        
   }).catch((err)=>{
    console.log(err)
    res.redirect('/admin');
   })        
  }    

  exports.adduser = function(req, res){
    User.findOne({ nrp: req.body.nrp }) 
    .then((doc) => {
       if (doc) {
        //  res.send(doc)
         res.redirect('/admin');
       } else {
         console.log("no data exist for this id");
         let newuser = new User({nrp:req.body.nrp, password:req.body.password}); // this is modal object.
         newuser.save()
           .then((data)=> {
            //  res.send(data)
             res.redirect('/admin');
            })
           .catch((err)=> {
            //  res.send(err)
             res.redirect('/admin');
           })         
       }
    })
   .catch((err) => {
     console.log(err);
     res.redirect('/admin');
    });       
  }  

  exports.deleteuser = function(req, res){
   User.findOneAndRemove({_id: req.params.id})
     .then((docs)=>{
        if (err) {
            res.send(err);
        }else{
            res.get('/admin');
        }
        
   }).catch((err)=>{
    console.log(err)
    res.redirect('/admin');
   })           
  }
