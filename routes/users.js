var express = require('express');
var router = express.Router();

let users = [
  {id: 1, name: "Mostapha", password: "fmp123"},
  {id: 2, name: "Bob", password: "sth145"},
  {id: 3, name: "Ahmed", password: "momo"},
  {id: 4, name: "johan", password: "Sverige"},
  {id: 5, name: "Mohammed", password: "Marocko"}
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

router.post('/login', function(req, res, next) {
  const {name, password} = req.body;
  const foundUser = users.find(user => user.name === name);

  if (password === foundUser.password) {
    res.status(201).json({name: foundUser.name, id:foundUser.id})
  } else {
    res.status(401).json("OPSS")
  }
});

module.exports = router;






