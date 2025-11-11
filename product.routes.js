const express = require("express");
const router= express.Router();
const productcontroller = require("./controllers/product.controller")

router.get("/products", productcontroller.createproduct)

module.exports = router