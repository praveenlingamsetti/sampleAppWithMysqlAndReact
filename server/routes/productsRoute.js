const express = require("express");
const router = express.Router();
const sampleController = require("../controller/samplecontroller");

router.post("/add-product", sampleController.addProduct);

module.exports = router;
