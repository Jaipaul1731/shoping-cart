const express= require('express');
const router=express.Router();
const Product=require("../models/product");
const Review = require('../models/Review');
const {isLoggedIn}=require('../middleware')

//Display all the products
router.get('/products',async(req,res)=>{
    try {
        const products=await Product.find({});
        res.render('products/index',{products}); 
    } catch (e) {
        console.log('something went wrong');
        req.flash('error',"cannot find product")
        res.redirect('/error')
    }
   
})

//Getting a form for new Products.
router.get("/products/new",isLoggedIn,(req,res)=>{
    
    res.render('products/new');
})
//create a new product.
router.post('/products',async(req,res)=>{
   try {
    await Product.create(req.body.product);
    req.flash('success','Product created sucessfully.')
    res.redirect('/products')
   } catch (e) {
        console.log(e.message)
        req.flash('error',"cannot create product,Something Went wrong")
        res.redirect('/error')
   }
   
});

//Show a particular Product.
router.get('/products/:id',async(req,res)=>{
    try{
        const product= await Product.findById(req.params.id).populate('reviews');
        res.render('products/show',{product});
    }catch (e) {
        console.log(e.message)
        req.flash('error',"cannot create product,Something Went wrong")
        res.redirect('/error')
   }  
})
//edit the products.
router.get('/products/:id/edit',isLoggedIn,async(req,res)=>{
    const product= await Product.findById(req.params.id);
 
    res.render('products/edit',{product});
 })
//update the product.
router.patch('/products/:id',isLoggedIn,async(req,res)=>{
    const product =await Product.findByIdAndUpdate(req.params.id,req.body.product);
    req.flash('success','Updated successfully.')
    res.redirect(`/products/${req.params.id}`)
})
//delete the product.
router.delete('/products/:id',isLoggedIn,async(req,res)=>{
    await Product.findByIdAndDelete(req.params.id);
    
    res.redirect('/products')
})

//Adding the review on the product.
router.post('/products/:id/review',isLoggedIn,async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id);
        const review=new Review({
            user:req.user.username,
            ...req.body
            
        });
        
    
        product.reviews.push(review);
        await review.save();
        await product.save();
        
        req.flash('success','Successfully added your review')
        res.redirect(`/products/${req.params.id}`) 
    } catch (e) {
        console.log(e.message);
        req.flash('error','Cannot add review to this product');
        res.redirect('/error');
    }
})




router.get('/error',(req,res)=>{
    res.status(500).render('error');
})



module.exports=router;