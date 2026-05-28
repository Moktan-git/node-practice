const express = require('express');
const app = express();


app.use(express.json());
app.get("/", function (req, res){
    res.json({message: "get method is working"});
})

app.post("/", function (req, res){
    res.json({message: "post/update method is working"});
})

app.patch("/",function(req,res){
    res.json({
        message: "patch or edit method is working"
    })
})

app.delete("/",function (req,res){
    res.json({
        message: "delete method is working"
    })
})







app.listen(3000, function (){
    console.log('Server is running on port 3000');
});
