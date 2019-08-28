var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
const db = require('../models/index')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


// Path - /signup
router.post('/', function(req, res) {
  db.User.findOne({email : req.body.email})
  .then(res)
});

module.exports = router;