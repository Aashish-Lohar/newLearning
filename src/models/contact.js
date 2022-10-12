const mongoose=require('mongoose');
const contact_schema=new mongoose.Schema({
    email:String,
    contact:Number,
    query:String
});

module.exports=new mongoose.model('contact',contact_schema);