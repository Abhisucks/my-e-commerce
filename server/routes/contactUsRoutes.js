const { addMessage, getAllMessage } = require("../controllers/contactUsController")

const router = require("express").Router()

router
    .get("/", getAllMessage)
    .post("/add", addMessage)
// .get("/:productId", getOneProduct)
// .delete("/destroy", destroyProduct)
// .delete("/delete/:productId", deleteProduct)

module.exports = router    
