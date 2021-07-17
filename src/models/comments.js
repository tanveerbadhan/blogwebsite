const mongoose = require("mongoose");




const commentschema = new mongoose.Schema({
    comment:{
     type:String,
     required:true
    }
})

const Comment = new mongoose.model("Comment",commentschema);

module.exports = Comment;