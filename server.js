const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
<<<<<<< HEAD
const listingRoutes = require('./routes/listingRoutes')
=======
const htmlRoutes = require('./routes/htmlRoutes');
>>>>>>> fd907ac9e87cf162a161bb7b5ffab7de403fe701
const passportSetup = require('./controller/passport-setup');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const listing = require('./models/storage');

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
app.use(express.urlencoded({extended: true}));
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
<<<<<<< HEAD
app.use('/listings', listingRoutes);
=======
app.use('/listings', htmlRoutes);
>>>>>>> fd907ac9e87cf162a161bb7b5ffab7de403fe701

//create home route
app.get('/', (req, res)=>{
    res.render('index', {user:req.user});
});



app.listen(PORT, function(){
    console.log("App is now listening on http://localhost:" + PORT);
});