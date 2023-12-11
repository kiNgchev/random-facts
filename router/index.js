const Router = require("express").Router
const router = new Router()
const FactController = require("../controllers/Fact")

router.get("/get", new FactController().get)
router.get("/", new FactController().get)

module.exports = router