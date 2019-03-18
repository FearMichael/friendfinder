const express = require("express");
// const path = require("path");
const router = express.Router();

    router.get("/", function(req, res) {
        res.sendFile("/app/public/home.html", {root: "."})
        });
    
    router.get("/survey", function(req, res) {
        res.sendFile("/app/public/survey.html", {root: "."})
        });
    
module.exports = router;