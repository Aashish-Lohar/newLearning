const mongoose=require('mongoose');
const sliderSchema=new mongoose.Schema({
    title:String,
    subTitle:String,
    imageUrl:String,
    class:String
})

const slider=new mongoose.model('slider',sliderSchema);
module.exports=slider;
