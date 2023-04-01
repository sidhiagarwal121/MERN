const url=require('url')
const http=require('http')
const fs=require('fs')
http.createServer((req,res)=>{
const path=req.url
if(path=='/about')
{
    res.writeHead(200,{
        'content-type':'text/html'
    
    })
    const filecontent=fs.readFileSync('./files/about.html')
    res.write(filecontent);
    console.log('about page')
    res.end();
}
else if(path=='/')
{
    console.log('Home Page')
    res.writeHead(200,{
        'content-type':'text/html'
    })
    const filecontent=fs.readFileSync('./files/home_page.html')
    res.write(filecontent)
    res.end();
}
else if(path=='/services')
{
    res.writeHead(200,{
        'content-type':'text/html'
    })
    const filecontent1=fs.readFileSync('./files/services.html');
    res.write(filecontent1);
    console.log("services")
    res.end();
}
}).listen(8092)