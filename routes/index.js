var express = require('express');
var router = express.Router();
const userService = require('../controllers/test');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello");
});

router.get('/users',userService.users);

module.exports = router;
