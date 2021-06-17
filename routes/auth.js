const express= require('express');
const router=express.Router();
const User = require('../models/user');
const passport=require('passport');

// router.get('/fakeUser', async (req, res) => {

//     const user = new User({ email: 'sabeel@gmail.com',username:'sabeel' });
//     const newUser = await User.register(user, 'sabeel12');
//     res.send(newUser);
// })

//simply show the signup form
router.get('/register',(req,res)=>{
    res.render('auth/signup')
})
//register the new user
router.post('/register',async(req,res)=>{
    try {
        const user=new User({email:req.body.email,username:req.body.username});
        const newUser=await User.register(user,req.body.password)
        
        req.flash('success','Register successfully')
        res.redirect('/products')
    } catch (e) {
        req.flash('error',e.message);
        res.redirect('/register')
    }
    
});

//show the login page
router.get('/login', async (req, res) => {
    
    res.render('auth/login')
})
//login the user
router.post('/login',
  passport.authenticate('local', 
    { 
       
        failureRedirect: '/login',
        failureFlash: true 
    }
    ),(req,res)=>{
        req.flash('success',`Welcome Back!! ${req.user.username}`)
        res.redirect('/products')
    });

router.get('/logout',(req,res)=>{
    req.logOut();
    req.flash('success','Logout Sucessfully')
    res.redirect('/login')
})

module.exports=router;