const express = require('express');
const {register, updaterlib, deletelib, getlib}= require('../controller/libcontroll');

const router = express.Router();

router.post('/',register);
router.put('/:MamberId',updaterlib);
router.delete('/:MemberId',deletelib);
router.get('/',getlib);
module.exports = router