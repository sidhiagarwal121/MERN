const fs=require('fs')
// console.log(fs.readFile('b.txt','utf8',(err,data)=>
// {
//     con 
sole.log(err,data)
// }))
// const a=fs.readFileSync('a.txt')
// console.log(a.toString())
fs.writeFile('b.txt','this is file 2',()=>{
    console.log("written to the file")
})
fs.writeFileSync('b.txt','this is file 2',()=>{
    console.log("written to the file")
})
