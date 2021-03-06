const express = require('express')
const app = express()
const data = require("./data.json")

app.use(express.json());

app.get("/clients", function(req, res){
    res.json(data);
});

app.get("/clients/:id", function(req, res){
    const { id } = req.params
    const client = data.find(cli => cli.id = id)

    if (!client) return res.status(204).json();

    res.json(client)

});

app.post("/clients/:id", function(req, res){
    const { name, email } = req.nody;

    //salvar

    res.json({ name, email });
});

app.put("/clients/:id", function(req, res){});
app.delete("/clients", function(req, res){});

app.listen(3000, function() {
    console.log("Server is running");
});