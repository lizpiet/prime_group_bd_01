var express = require('express');
var router = express.Router();
var Assignment = require('../models/assignments.js');
var ObjectID = require('mongoose').Types.ObjectId;

/* GET users listing. */
router.get('/:id?', function(req, res, next) {
  if(req.params.id){
    var query = {_id: new ObjectID(req.params.id)}
    Assignment.find(query, function(err, assignment){
      console.log(query);
      if(err){
        console.log(err);
        next(err);
      }else{
        res.json(assignment);
      }
    });
  }else {
    Assignment.find({}, function (err, assignment) {
      if (err) {
        console.log(err);
        next(err);
      } else {
        res.json(assignment);
      }
    });
  }
});

router.post('/', function(req, res, next) {
  var assignment = new Assignment(req.body);
  assignment.save(function (err){
    if (err){
      console.log(err);
      res.send('There was an error:', err.message);
    }
  });
  res.send('respond with a resource');
});

module.exports = router;
