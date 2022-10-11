const express=require('express');
const routes=require('./routes/main');
const hbs=require('hbs');
const mongoose=require('mongoose');
const navbar=require('./models/schema');
const slider=require('./models/slider');
const app=express();
const port=process.env.PORT|8000;

// db connection 
mongoose.connect('mongodb://localhost:27017/website')
.then(()=>console.log('db connected'))
.catch((err)=>console.log(err));

// insert data 

const nav=new navbar({
    brandName:'IT Solutions',
    brandIconUrl:'https://www.freepnglogos.com/uploads/g-letter-png/g-letter-google-icon-download-png-and-vector-20.png',
    links:[
        {
            label:"Home",
            url:'/'
        },
        {
            label:"Services",
            url:"/services"
        },
        {
            label:"Gallery",
            url:"/gallery"
        },
        {
            label:"About",
            url:"/about"
        },
        {
            label:"Contact Us",
            url:"/contactus"
        },
    ]
})

// nav.save();

//slider data
// const slide=new slider(//single data
//     {
//         title:'first slide',
//         subTitle:'first subtitle',
//         imageUrl:'/images/nature1.jpg'
//     })
// slide.save();

// const slide=slider.insertMany([// insert multiple data
//     {
//         title:'first slide',
//         subTitle:'first subtitle',
//         imageUrl:'/images/nature1.jpg',
//         class:'active'
//     },
//     {
//         title:'second slide',
//         subTitle:'second subtitle',
//         imageUrl:'/images/nature2.jpg'
//     },
//     {
//         title:'third slide',
//         subTitle:'third subtitle',
//         imageUrl:'/images/nature3.jpg'
//     }
// ])

app.use('',routes);
app.use(express.static('public'));


//template engine hbs
app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials");


app.listen(port,()=>{
    console.log('connected on ',port);
})