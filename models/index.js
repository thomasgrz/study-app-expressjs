//check if the global object has a db property
//this section was to test db connection
//but it makes no sense to store this in
//the splash page so it has been moved to login
//where it will be used
//and a value can be set in memory
//load env variables
require('dotenv').config()

if(!global.hasOwnProperty('db')){

    var Sequelize = require('sequelize'),
        sequelize = null;
    //check if the process.env object has a DATABASE_URL
    if(!process.env.IS_DEV){
        console.log('sequelize crashed')
        //we must be on heroku then
        // sequelize = new Sequelize(process.env.DATABASE_URL,{
        //     dialect:'postgres',
        //     protocol:'postgres',
        //     operatorAliases:false,
        //     logging:false
        // })
    }else{
        //we must be on local
        sequelize = new Sequelize('postgres://localhost/my_new_database')
        console.log('this is from a local machine')
    }
    global.db={
        Sequelize: Sequelize,
        sequelize: sequelize,
    }
}

module.exports = global.db