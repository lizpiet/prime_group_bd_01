var express = require('express');
var router = express.Router();
var Assignment = require('../models/assignments.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  Assignment.find({}, function(err, assignments){
    if(err){
      console.log(err);
      next(err);
    }else{
      res.render('index', { title: 'Class Assignments', assignments: assignments });
    }
  });

});

module.exports = router;
