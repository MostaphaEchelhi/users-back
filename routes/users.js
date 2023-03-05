var express = require('express');
var router = express.Router();

let users = [
  {id: 1, name: "Mostapha"},
  {id: 2, name: "Bob"},
  {id: 3, name: "Ahmed"},
  {id: 4, name: "johan"},
  {id: 5, name: "Mohammed"}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next) {

  let newUser = req.body;
  newUser.id = users.length +1;
  users.push(newUser);
  console.log(newUser);


  res.json(users);
});

module.exports = router;
