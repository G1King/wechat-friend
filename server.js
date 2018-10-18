const express = require('express');
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

//引入users.js
const users = require("./routes/api/users");
// DB CONFIG
const db = require('./config/keys').mongoURI;
// connect to db
mongoose.connect(db).then(()=>{
    console.log('mongodb connect')
}).catch(err => console.log(err))
//使用body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
//使用routes GET api/users/test
app.use("/api/users",users)

app.get('/',(req,res)=>{
res.send('hello world')
})
app.listen(port,()=>{
    console.log (`Server runing  on port ${port} `)
})
// mongodb: //<dbuser>:<dbpassword>@ds235243.mlab.com:35243/restful-api-pro