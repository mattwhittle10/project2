const router = require('express').Router();
const authroutes = require('./auth-routes');
const listing = require('../models/storage');

const authCheck = (req, res, next) =>{
    if(!req.user){
        //if user is not logged in
        res.redirect('/auth/login');
    }else{
        //if they are logged in
        next();
    }
};

router.get('/', authCheck, (req,res) =>{
    var id = parseInt(req.user.customer_id);
    //profile page will render here! passing in the user object with all of the details 
    //send in a view here
    console.log(id);
        res.render('profile', {user:req.user});   
});

router.get('/update', (req, res) =>{
    res.render('update-profile', {user:req.user});
});

module.exports = router;