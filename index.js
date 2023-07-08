const express=require("express");
const connection = require("./database/connection");


const app=express();
// connection();
app.use(express.json());

app.get('/student',(req,res)=>{
  connection.query('select *from students',(err,rows)=>{
    if(err)
    console.log(err)
    else
    res.status(200).json(rows)
  })

})

app.listen(4000,()=>{
    console.log("server is running");
})