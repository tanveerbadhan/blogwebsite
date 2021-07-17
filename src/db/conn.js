const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://tanveersingh:tanveersingh@cluster0.nt9qv.mongodb.net/blogdata?retryWrites=true&w=majority",{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true,
useFindAndModify:false
}).then(()=>{
    console.log(`connection succesful`)
}).catch((e)=>{
    console.log(`no connection`);
})