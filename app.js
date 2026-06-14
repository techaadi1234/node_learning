const express=require('express');
const mongoose =require('mongoose');



const app=express();



const dbURI='mongodb+srv://aadi:1173@nodelearn.5lz3yxn.mongodb.net/?appName=nodelearn';
mongoose.connect(dbURI)
.then((result)=>app.listen(3000))
.catch((err)=>console.log('error'))
app.set('view engine','ejs');



app.get('/',(req,res)=>{
    res.render('index',{title:'HOME'});
});
app.use((req,res)=>{
  res.status(404).render('404',{title:'404'});

});
