var express = require("express");
var router = express.Router();
var newController = require("../app/controllers/NewControllers");

router.use("/", newController.index);
module.exports = router;
