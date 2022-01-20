const router = require('express').Router()

const routerUser = require('../routes/users')

router.get("/", (req, res) => {res.send("Welcome to Sejuta Cita")});
router.use("/user", routerUser)

module.exports = router