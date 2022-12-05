const express = require("express")
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const mongoose = require("mongoose")
const bodypaser = require("body-parser")


//mongoose connection
mongoose.connect('mongodb+srv://karan:karanarora@cluster0.ujsaxn6.mongodb.net/?retryWrites=true&w=majorit', {
          useNewUrlParser: true,
          useUnifiedTopology: true
     },(err)=>{
          if(err){console.log(err)}
          else{console.log("connected in database")}
     })
const Notes = require("./modelYt.js")


app.use(bodypaser.urlencoded({
     extended: true
}))
app.use(express.json())
app.listen(port, () => {
     console.log("server is strated ...")
})

app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, '/index.html'))
})
// app.get 
app.get("/form", (req, res) => {
     // console.log("someone tried to access rootpage")
     res.sendFile(__dirname + "/form.html")
     console.log("we have send file of form")
     // res.status(200).json("hello buddy")
})
// app.post
app.post("/form",function (req,res){
     let a = req.body.one;
     console.log(a)
     console.log("sending to thankyou")
     res.sendFile(__dirname + "/thankyou.html")
     // console.log("try to get post")
     // let newNote = new Notes({
     //      title: req.body.title,
     //      content : req.body.content
     // })
     // newNote.save();
     // console.log("tru to save")
     // res.redirect("/form");
     // console.log("first")
     // console.log(newNote);  
     // res.end(JSON.stringify(newNote));
}) 
