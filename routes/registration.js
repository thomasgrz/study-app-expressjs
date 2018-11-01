var express = require('express');
var router = express.Router();
var db = require('../models/index');

/* GET registration page. */
router.get('/', function(req, res, next) {
  res.render('registration', { title: 'Express' });
});
/*POST to registration page */
router.post('/',function(req,res,next){
    let username = req.body.username
    let password = req.body.password
    let result
    db.sequelize.authenticate()
    .then(()=>{
        console.log('Connection has been successfully established')
    })
    .catch(err=>{
        console.error('Unable to connect to the database: ', err)
    })
    db.sequelize.query('SELECT EXISTS(SELECT 1 FROM users WHERE name=?)',{
        replacements:[username],
        type:db.sequelize.QueryTypes.SELECT
    })
    .then((result)=>{
        let user_exists = result[0].exists;
        if(user_exists==true){
            console.log('that does exist')
            res.render('registration',{exists:user_exists})
        }else if(user_exists===false){
            console.log('that name doesnt exist ', result)
            db.sequelize.query('INSERT INTO users (name, password) VALUES (?,?)',{
                replacements:[username, password],
                type: db.sequelize.QueryTypes.INSERT
            })
            .then((result)=>console.log(result))
            res.render('registration')
        }else{
            console.log('something went wrong ', result)
        }
    })
    .catch(err=>console.error(err))
})
module.exports = router;