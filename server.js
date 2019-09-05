const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const dotenv = require('dotenv').config();

const authRoutes = require('./controller/auth-routes');
const profileRoutes = require('./controller/profile-routes');
const listingRoutes = require('./controller/listingRoutes')
const apiRoutes = require('./controller/apiRoutes');
const passportSetup = require('./models/passport-setup');
const keys = require('./config/keys');
const listing = require('./models/storage');
const awsRoutes = require ("./controller/file_upload");

const app = express();

var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//set up cookie session and encrypts 
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, //one day
    keys: [keys.session.cookieKey] //encrypts the cookie
}));

//parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//set handlebars
var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/listings', listingRoutes);
app.use('/api', apiRoutes);
app.use(awsRoutes);

//create home route

app.get('/', (req, res)=>{
    listing.allListings(function(data){
        var listings = data;
        res.render('index', {user:req.user, listings})
      });
});


app.listen(PORT, function(){

    console.log("App is now listening on http://localhost:" + PORT);
});