const express = require("express");

const app = express();

app.get("/", function (req, res) {
   res.send("<h1>Hello, world!</h1>")
});

app.get("/contact", function(req, res) {
    res.send("I'd rather you didn't")
})

app.listen(3000, function(){
    console.log("Server running on port 3000");
});