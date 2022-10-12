const express=require('express');
const routes=new express.Router();
const navbar=require('../models/schema');
const slider=require('../models/slider');
const services=require('../models/services');
const contacts=require('../models/contact');

routes.get('/',async(req,res)=>{
    const nav=await navbar.findOne()
    const slide=await slider.find();
    const service=await services.find();
    // console.log(slide);
    // console.log(nav);
    console.log(service);
    res.render('index',{
        nav:nav,
        slide:slide,
        service:service
    });
})

routes.get('/gallery',async(req,res)=>{
    const nav=await navbar.findOne()
    console.log(nav);
    res.render('gallery',{
        nav:nav
    });
})

// routes.get('/process_contact_form',(req,res)=>{
//     console.log("hello",req.body.email)
// })
routes.post('/process_contact_form',async(req,res)=>{
    console.log(req.body);
    // const contact=contacts.create([
    //     {
    //         email:req.body.email,
    //         contact:req.body.contact,
    //         query:req.body.query
    //     }
    // ])
    const contact=new contacts(req.body);
    contact.save();
    res.send(req.body);
})

module.exports=routes;