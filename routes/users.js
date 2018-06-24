var express = require('express');
var router = express.Router();
const User = require('../controllers/users_controller.js')


/* GET users listing. */
router.post('/signup',User.signUp)
router.get('/show',User.show)
router.get('/showone',User.showOne)
router.post('/signin',User.signIn)


module.exports = router;
