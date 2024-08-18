const express = require('express');
const app = express();
const port = 7000;
const bodyparser=require('body-parser');
const urlencodeparser=bodyparser.urlencoded({extended:false});
const path=require("path");


app.use (bodyparser.json());
app.use(express.static(path.join(__dirname,'..',"CALCULATOR")));
var obj={result:0}


app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname,"home.html"))
});

app.post("/",urlencodeparser,(req,res)=>{
    console.log(req.body);
    obj={result:req.body.result};
    res.redirect("/");
    
})

app.get("/result",(req,res)=>{
    res.json(obj);
})
app.listen(port, () => {
    console.log(`Listening port http://localhost:${port}`);
});