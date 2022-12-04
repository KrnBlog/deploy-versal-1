const router = require("express").Router() ;
const mongoose = require("mongoose")

const YtSchema1 = {
     title : {
          type:String,
     },
     content:{
          type:String
     }
}

module.exports = mongoose.model("Youtube1",YtSchema1)