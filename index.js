const express=require('express')
const app=express();
const path=require("path")
// const staticpath=path.join(__dirname,"../public");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.get("/",(req,res)=>{
    res.render("index",{
        dynamictext:"siddhi"
    });
});
app.get("/about",(req,res)=>{
    res.render("kuch_bhi");
});
app.get("./about/*",(req,res)=>{
    res.render("404");
});
app.listen(6542,()=>{
    console.log("running successfully on port 6542")
})