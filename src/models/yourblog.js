const mongoose = require("mongoose");




const yourblogschema = new mongoose.Schema({
    name:String,
    heading:String,
    date:String,
    filepath:String,
    experience:String
});

const Yourblog = new mongoose.model("Yourblog",yourblogschema);

module.exports = Yourblog;