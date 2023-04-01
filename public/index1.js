const express=require('express');
const app=express()
const path=require("path")
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'index.html'))
});
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'index1.html'))
})
app.listen(4000,()=>{
    console.log("listening on port 4000")
})

