const router = require('express').Router();
const authroutes = require('./auth-routes');
const listing = require('../models/storage');
const customer = require('../models/customer');


const authCheck = (req, res, next) => {
    if (!req.user) {
        //if user is not logged in
        res.redirect('/auth/login');
    } else {
        //if they are logged in
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    listing.allListings(function(data){
        var listings = data;
        console.log(listings);
        //profile page will render here! passing in the user object with all of the details 
        //send in a view here
        res.render('profile', {user:req.user, listings});   
    })
});

  //Update a user
  router.put('/:id', function(req, res){
    var userObj = req.body;
    var condition = "customer_id =" + req.params.id;
    customer.updateUser(userObj, condition, function(){
      res.status(204).end();
    });
    // console.log(userObj, condition);

});

router.get('/update', (req, res) =>{
    var id = parseInt(req.user.customer_id);
    //stores the users individual 
    res.render('update-profile', {user:req.user, id});
});

module.exports = router;