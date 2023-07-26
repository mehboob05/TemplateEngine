const express = require("express");
const app = express();


//setup view engine
app.set('view engine','ejs');

app.get("/", (req,res)=>{


    res.render("index")
})

app.get("/about", (req,res)=>{
    res.render("about")
})
app.get("/contact", (req,res)=>{
    res.render("contact")
})
app.get("/services", (req,res)=>{
    const data = [
        {
            
            service:"Web Development"
        },
        {
            
            service:"Mobile App Development"
        },
        {
            
            service:"WordPress Development"
        }
    ]
    res.render("services",{users:data});
})


app.listen(3004, ()=>{
    console.log("Server is Running")
})