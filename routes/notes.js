var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.send("Hello Cuwk! Ini path /notes");
});

module.exports = router;