require("dotenv");
const express = require("express");
const app = express();
// const path = require("path");

const PORT = process.env.PORT || 3000;
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");


const testResults = [];

app.use(express.static(__dirname + '/app/public'));
app.use(express.static(__dirname + "/app/data"))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', htmlRoutes);
app.use('/', apiRoutes);

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname + "/app/public/home.html"))
// });

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname + "/app/public/survey.html"))
// });


app.listen(PORT, function() {
    console.log(`Listening on Port: ${PORT}`)
});