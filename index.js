const express = require('express');
const dp = require('./configs/mongoose')



const port = 8000;
app = express();

// it will help to parse the body
app.use(express.urlencoded({extended:true}));

// to see in what is the request url
app.use((req,res,next)=>{
    console.log("requesting for   :",req.url);
    next();
})
app.use('/',require('./routes'))





// this server start listening here
app.listen(port,(err)=>{
    if(err){console.log("server not connected ",err)}
    console.log("server is up and runnning",port);
})
