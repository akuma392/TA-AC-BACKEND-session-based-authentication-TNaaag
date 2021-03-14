var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  console.log(req.cookies);
  res.cookie('username', 'Abhishek');
  res.redirect('/');
});

module.exports = router;
