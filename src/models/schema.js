const mongoose=require('mongoose');
const navbarSchema=new mongoose.Schema({
    brandName:String,
    brandIconUrl:String,
    links:[
        {
            label:String,
            url:String
        }
    ]
});

const navbar=new mongoose.model('navbar',navbarSchema);

module.exports=navbar;