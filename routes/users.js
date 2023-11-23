const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");

router.route("/register", UserController.create);
router.route("/authenticate", UserController.authenticate);


module.exports = router;