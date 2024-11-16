const express = require("express");
const { emailController } = require("../controllers/emailController");
const { validation } = require("../middlewares/validation");

const router = express.Router();
router.post("/sendemail",validation, emailController);
module.exports = {router};