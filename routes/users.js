var express = require('express');
var router = express.Router();

let users = [
  {id: 1, name: "Mostapha"},
  {id: 2, name: "Bob"},
  {id: 3, name: "Ahmed"},
  {id: 4, name: "johan"},
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
