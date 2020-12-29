var express = require('express');
var burger = require('../models/burgers');
var router = express.Router();

router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var handlebarsObject = {
            burgers: data
        };
        res.render('index', handlebarsObject)
    });
});

router.post('/burgers', function (req, res) {
    burger.insertOne([
        'burger_name'
    ], [
        req.body.burger_name
    ], function() {
        res.redirect('/');
    })
});

router.put('/burgers/:id', function (req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect('/');
    })
});

module.exports = router;

