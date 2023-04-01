const getQuotes=async()=>{
    const api='https://type.fit/api/quotes';
    try{
        let data = await fetch(api);
        let realdata=await data.json();
        const num=Math.floor(Math.random()*1000);
        let my_quote=document.getElementById('my_quote')
        let author=document.getElementById('author')
        my_quote.innerHTML=realdata[num].text;
        author.innerHTML=realdata[num].author;
    }
    catch(error){
    console.log(error)
    }
}