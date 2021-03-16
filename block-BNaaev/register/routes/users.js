var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/register', (req, res, next) => {
  res.render('register');
});

router.post('/register', (req, res, next) => {
  console.log(req.body, '*************');
  User.create(req.body, (err, user) => {
    if (err) next(err);
    console.log(user);
  });
});
module.exports = router;
