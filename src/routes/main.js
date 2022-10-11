const express=require('express');
const routes=new express.Router();
const navbar=require('../models/schema');
const slider=require('../models/slider');
routes.get('/',async(req,res)=>{
    const nav=await navbar.findOne()
    const slide=await slider.find();
    console.log(slide);
    // console.log(nav);
    res.render('index',{
        nav:nav,
        slide:slide
    });
})

routes.get('/gallery',async(req,res)=>{
    const nav=await navbar.findOne()
    console.log(nav);
    res.render('gallery',{
        nav:nav
    });
})

module.exports=routes;