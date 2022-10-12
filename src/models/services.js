const mongoose=require('mongoose');
const services_schema= new mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linkText1:String,
    link1:String,
    linkText2:String,
    link2:String
});

module.exports=new mongoose.model('service',services_schema);