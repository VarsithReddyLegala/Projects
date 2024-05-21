const express=require("express");
const cors=require("cors")
const pool = require("./database")
const app=express()

app.use(express.json())
app.use(cors())

app.post("/adduser",(req,res)=>{
    const username=req.body["username"];
    const password=req.body["password"];
    console.log(username);
    console.log(password);
    const insert=`INSERT INTO users(username,password) VALUES ( '${username}','${password}')`;

    pool.query(insert).then((response)=>{
      console.log("Data Saved")  
      res.json({ message: "User added successfully" });
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({ error: "Database error" }); 
    })
    console.log(req.body);
})

app.listen(4000,()=>console.log("Server on localhost 4000"));