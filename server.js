const express=require('express');
const path=require('path');

const app=express();

const PORT=3000;

app.listen(PORT,(error)=>{
error? console.log(error):console.log(`listening port ${PORT}`);
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/1.html");
});
