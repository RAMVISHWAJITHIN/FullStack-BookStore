const express = require("express");
const router = express.Router();
const {createAorder, getOrderByEmail}=require('./order.controller')


//create order endpoint
router.post("/",createAorder)

//get orders by user email
router.get("/email/:email",getOrderByEmail);



module.exports = router;