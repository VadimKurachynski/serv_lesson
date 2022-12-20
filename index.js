import express from 'express'


const PORT=5000;

const app=express()

app.listen(PORT,()=>console.log(`server started on ${PORT}`))

app.get(`/`,(req,res)=>{
    res.status(200).json("сервер работает")
})



console.log("server working")