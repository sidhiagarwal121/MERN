const app=require('express')
const expresse=app();
const staticpath=path.json(__dirname,"..public")
expresse.use(app.static(staticpath))
expresse.get('/',(req,res)=>{
console.log('This is my Home Page')
res.send("This is my Home Page")
})
expresse.get('/about',(req,res)=>{
    console.log('This is my About Page')
    res.send('This is my About Page')
})
expresse.get('/temp',(req,res)=>{
    res.send({
        id:1,
        name:"siddhi"
    });
});
expresse.listen(8000,()=>{
    console.log("running on port 8000")
})