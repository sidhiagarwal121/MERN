const emailSender=require('nodemailer')
let transport=mailer.createTransport({
    service:'gmail',
    auth:{
        user:'sidhiagarwal222@gmailcom',
        pass:''
    }
})
let messageOb={
        from:'sidhiagarwl9839@gmail.com',
        to:'sidhiagarwal222@gmail.com',
        subject:'Email using node JS',
};
transport.sendMail(messageOb,(error,info)=>{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log("Email Sent");
        console.log(info.response);
    }
})
