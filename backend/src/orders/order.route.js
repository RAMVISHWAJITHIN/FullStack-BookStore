const express = require("express");
const router = express.Router();
const {createAorder}=require('./order.controller')


//create order endpoint
router.post("/",createAorder)



module.exports = router;