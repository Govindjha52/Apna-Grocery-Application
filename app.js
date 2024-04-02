const express = require("express");
const app = express();

require("dotenv/config");

const cors = require("cors");
const {default:mongoose, Mongoose} = require("mongoose");


app.use(cors({origin:true}));
app.use(express.json());


app.get("/", (req,res) =>{
    return res.json("HII-BUDDY.....")
});

mongoose.connect(process.env.DB_STRING,{
    useNewURLParser:true
})

mongoose.connection
   .once("open", ()=>{
    console.log("MongoDB is Connected")
   }).on("error",(error) =>{
    console.log(`Error : ${error}`);
   })

   app.listen(4000, () =>{
    console.log("Listining to port 4000")
   })