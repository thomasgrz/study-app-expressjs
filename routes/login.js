// var config = require('dotenv').config().parsed
var { Client } = require("pg");
var express = require('express')
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('login');
})

router.post('/',function(req,res){
    // console.log(this)
    // res.send(this)
    
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl:true,
      })
      
      client.connect().catch((err)=>console.error(err))
      
      client.query('SELECT * FROM users WHERE name=\'thomas\';',(err,res)=>{
        if(err){
          throw err;
        }
        for(let row of res.rows){
          console.log(JSON.stringify(row))
        }
        client.end()
      });
})
module.exports = router;