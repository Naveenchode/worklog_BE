var express = require('express');
var router = express.Router();
const userService = require('../controllers/test');
const worklogService = require('../controllers/worklogcontrollers');


/* GET home page. */
router.get('/users',userService.users);
router.get('/getprojects',worklogService.getprojects);
router.post('/getprojectdetails/:projectId',worklogService.getprojectdetails);
router.get('/', function(req, res, next) {
  res.send("Hello");
});



module.exports = router;
