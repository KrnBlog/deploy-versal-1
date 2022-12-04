const express = require("express")
const app = express() ;
const port = 5000 ;

app.listen(port , ()=>{console.log("starting server ...")})
app.get("/",(req,res)=>{res.send("hello from root dire   ctory")})