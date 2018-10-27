var config = require('dotenv').config().parsed
var express = require('express')
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('login');
})

router.post('/',function(req,res){
    // console.log(this)
    // res.send(this)
    db.one('SELECT * FROM users WHERE name=$1',req.body.username)
        .then((data)=>{
            console.log("DATA: ",data)
        })
        .catch((error)=>console.error(error))
})
module.exports = router;