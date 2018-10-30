// var config = require('dotenv').config().parsed
var db = require('../models/index')
var express = require('express')
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('login');
})

router.post('/',function(req,res){
    // console.log(this)
    // res.send(this)
    let username = req.body.username
    let result
    console.log('the environment database_url is: ', process.env.DATABASE_URL)
    db.sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
    db.sequelize.query('SELECT name FROM users WHERE name=?',{replacements:[username], type:db.sequelize.QueryTypes.SELECT})
    .then((username)=>result=username[0]['name'])
    .then((result)=> res.render('index',{username: result}))
    .catch((error)=>console.error(error))
})
module.exports = router;