const mongoose=require('mongoose');
const Product =require("./models/product")

const  products=[
    
    {
        name:"iphone 12",
        img:"https://images.unsplash.com/photo-1604334782192-a7a3e4f48bac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDEyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:85000,
        desc:"Blast past fast. iPhone 12 The smartphone features an immersive 6.10-inch touchscreen display that has a resolution of 1170x2532 pixels at a pixel density of 460 pixels per inch (ppi). ... Further, the iPhone 12 features an IP68 rating for dust and water resistance."
    },
    {
        name:"Mackbook pro",
        img:"https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:195000,
        desc:"Blast past fast. iPhone 12 The smartphone features an immersive 6.10-inch touchscreen display that has a resolution of 1170x2532 pixels at a pixel density of 460 pixels per inch (ppi). ... Further, the iPhone 12 features an IP68 rating for dust and water resistance."
    },
    {
        name:"Apple watch",
        img:"https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:55000,
        desc:"Blast past fast. iPhone 12 The smartphone features an immersive 6.10-inch touchscreen display that has a resolution of 1170x2532 pixels at a pixel density of 460 pixels per inch (ppi). ... Further, the iPhone 12 features an IP68 rating for dust and water resistance."
    },
    {
        name:"Apple Air pod",
        img:"https://images.unsplash.com/photo-1594385208908-ecaaf1be7c78?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlyJTIwcG9kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:5000,
        desc:"Blast past fast. iPhone 12 The smartphone features an immersive 6.10-inch touchscreen display that has a resolution of 1170x2532 pixels at a pixel density of 460 pixels per inch (ppi). ... Further, the iPhone 12 features an IP68 rating for dust and water resistance."
    },
    {
        name:"Hp laptop",
        img:"https://images.unsplash.com/photo-1618410316609-107c7f6d3756?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhwJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:45000,
        desc:"Blast past fast. iPhone 12 The smartphone features an immersive 6.10-inch touchscreen display that has a resolution of 1170x2532 pixels at a pixel density of 460 pixels per inch (ppi). ... Further, the iPhone 12 features an IP68 rating for dust and water resistance."
    },
    {
        name:"Rolex watch",
        img:"https://images.unsplash.com/photo-1610897534349-7759782118b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9sZXglMjB3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:79000,
        desc:"Blast past fast. iPhone 12 The smartphone features an immersive 6.10-inch touchscreen display that has a resolution of 1170x2532 pixels at a pixel density of 460 pixels per inch (ppi). ... Further, the iPhone 12 features an IP68 rating for dust and water resistance."
    },
    {
        name:"Titan watch",
        img:"https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRpdGFuJTIwd2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:8000,
        desc:"Blast past fast. iPhone 12 The smartphone features an immersive 6.10-inch touchscreen display that has a resolution of 1170x2532 pixels at a pixel density of 460 pixels per inch (ppi). ... Further, the iPhone 12 features an IP68 rating for dust and water resistance."
    },
];

const seedDb=async()=>{
    await Product.insertMany(products);
    console.log("Db seeded")

}
module.exports=seedDb;