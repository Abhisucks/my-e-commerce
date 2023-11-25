const { addToCard } = require("../controllers/productController")

const router = require("express").Router()

router
    .post("/addCart", addToCard)


module.exports = router   