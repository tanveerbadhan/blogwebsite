const mongoose = require("mongoose");




const contactschema = new mongoose.Schema({
    firstname:{
     type:String,
     required:true
    },
    lastname:{
     type:String,
     required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneno:{
        type:Number,
        required:true,
        unique:true
    },
    suggestion:{
        type:String,
        required:true
    }

})

const Contact = new mongoose.model("Contact",contactschema);

module.exports = Contact;