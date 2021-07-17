if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

const express = require("express");
const path = require("path");
const ejs = require("ejs");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const app = express();
require("./db/conn");
const Contact = require("./models/contact"); 
const Comment = require("./models/comments");
const Yourblog = require("./models/yourblog");

const port = process.env.PORT || 3000;




app.use("/css",express.static(path.join(__dirname,"../public/css")));
app.use("/img",express.static(path.join(__dirname,"../public/img")));
app.use("/js",express.static(path.join(__dirname,"../public/js")));
app.use("/uploads",express.static(path.join(__dirname,"../public/uploads")));


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"../src/views"));





app.get("/",async(req,res)=>{
    
       try{
        const val= await Comment.find();
        res.render("index",{
            commentsdata:val
        });
       }catch(e){
        console.log(e);
        res.render("index");
       }
          
       
});


app.get("/about",(req,res)=>{
    res.render("about");
   });
   
app.get("/yourblogs",async(req,res)=>{

    try{
        const t= await Yourblog.find();
        //console.log(t);
        res.render("yourblogs",{
            yourblogdata:t
        });
       }catch(e){
        console.log(e);
        res.render("yourblogs");
       }
          
   });


app.get("/contact",(req,res)=>{
 res.render("contact");
});

app.get("/search",(req,res)=>{
    res.render("search");
   });

app.get("/blog1",(req,res)=>{
    res.render("blog1");
   });

   app.get("/blog2",(req,res)=>{
    res.render("blog2");
   });

   app.get("/blog3",(req,res)=>{
    res.render("blog3");
   });

   app.get("/blog4",(req,res)=>{
    res.render("blog4");
   });

   app.get("/blog5",(req,res)=>{
    res.render("blog5");
   });

   app.get("/blog6",(req,res)=>{
    res.render("blog6");
   });

   app.get("/blog7",(req,res)=>{
    res.render("blog7");
   });

   app.get("/blog8",(req,res)=>{
    res.render("blog8");
   });



app.post("/contactus",async(req,res)=>{
 try {
    
    const contactform = new Contact({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            phoneno:req.body.phoneno,
            suggestion:req.body.suggestion
       
    })
    
    const contactformsub = await contactform.save();
    res.status(201).redirect("/");
 } catch (error) {
     console.log(error);
     res.status(400).send(error);
 }
});


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params:{folder:"yourposts",
    allowedFormats:["jpeg","png","jpg"]}
    
});


var upload = multer({storage}).single("file");

app.post("/yourblogsus",upload,async(req,res)=>{
    try {
       
       const yourblog = new Yourblog({
               name:req.body.name,
               heading:req.body.heading,
               date:req.body.date,
               filepath:req.file.path,
               experience:req.body.experience
          
       })
       
       const yourblogsub = await yourblog.save();
       res.status(201).redirect("yourblogs");
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
   });

app.post("/comment",async(req,res)=>{
   
    try {
       
       const commentform = new Comment({
               
       comment:req.body.commenttextarea
              
       })
       //console.log(req.body.commenttextarea);
       
       const commentformsub = await commentform.save();
       res.status(201).redirect("/");
    } catch (error) {
        res.status(400).send(error);
    }
   });



   


app.listen(port,(req,res)=>{
    console.log(`The server is running at port no ${port}`);
})