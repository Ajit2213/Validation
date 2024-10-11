const express=require("express");
const app=express();

const port=3000;

app.use(express.json());
app.use(express.urlencoded({extends:true}));

app.get("/register",(req,res)=>{
    let data=req.query;
    let {user,password}=req.query;
    console.log(data)
    res.send(`welcome ${user} and your current password is ${password}`)
})

app.post("/register",(req,res)=>{
    let data=req.body;
    console.log(data)
    let{user,password}=req.body;
    res.send(`welcome ${user} and your current password is ${password}`)
})

app.listen(port,()=>{
    console.log("its listening");
})


