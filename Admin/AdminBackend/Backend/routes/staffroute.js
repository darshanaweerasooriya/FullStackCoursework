const express = require('express');
const { register } = require('../controller/staffcontroll');
//const { register, login, updatestaff, deletestaff, getstaff } = require('./controller/staffcontroll');

const router = express.Router();

router.post('/',register);

module.exports = router