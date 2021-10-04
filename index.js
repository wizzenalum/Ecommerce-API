const express = require('express');
const dp = require('./configs/mongoose')

const port = process.env.POST || 8000;
app = express();

// it will help to parse the body
app.use(express.urlencoded({extended:true}));

// to see in what is the request url remove in production
app.use((req,res,next)=>{
    console.log("requesting for   :",req.url);
    next();
})
// it is entry to all the routes
app.use('/',require('./routes'))


// this server start listening here
app.listen(port, (error) => {
    if (error) console.log("server connection ERROR", error);
    else console.log("visit application by",'\x1b[36m"CTL+Click"\x1b[0m');
    // Second argument is inserted in place of %s
    console.log('\x1b[33m%s\x1b[0m', `http://localhost:${port}`);  //yellow
  });
