if(process.env.NODE_ENV !=='production'){
    require('dotenv').config();
}

const express=require("express");
const app=express();
const path=require('path');
const mongoose=require("mongoose");
const session=require('express-session');
const flash=require('connect-flash');
const seedDb=require("./seed");
const methodOverride = require('method-override')
const passport=require('passport');
const LocalStrategy=require('passport-local');
const User=require('./models/user')

//product routes
const productRoutes=require('./routes/product');
const authRoutes=require('./routes/auth');
const cartRoutes=require('./routes/cart')

//connecting the database.
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false,useCreateIndex:true})
.then(()=>{
    console.log("DB connected")
})
.catch(err=>{
    console.log(err);
});

//seedDb();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'/public')));


const sessionconfig={
    secret:'weneedabetterseceret',
    resave:flash,
    saveUninitialized:true
}
app.use(session(sessionconfig))
app.use(flash());

//pasport configuration
//initailize the passport and session for storing the user info
app.use(passport.initialize());
app.use(passport.session());
//pasport configuration for use the local strategy
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use((req,res,next)=>{
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    res.locals.currentUser=req.user;
    next();
})


console.log(process.env.SECERET)




app.get("/",(req,res)=>{
    res.render('landing')
})
app.use(productRoutes);
app.use(authRoutes);
app.use(cartRoutes);

app.listen(process.env.PORT || 5000,(req,res)=>{
    console.log("Server is start at port 5000:")
})
