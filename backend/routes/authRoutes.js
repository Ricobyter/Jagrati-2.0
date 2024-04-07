const express = require("express")
const router = express.Router()
// const {home, register} = require("../controllers/authController") //? This will take too much space . Instead
const authControllers = require("../controllers/authControllers")

router.route("/").get(authControllers.home)

router.route("/register").post(authControllers.register)
router.route("/login").post(authControllers.login)

module.exports = router