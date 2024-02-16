const { addMessage, getAllMessage, getOneMessage } = require("../controllers/contactUsController")

const router = require("express").Router()

router
    .get("/", getAllMessage)
    .post("/add", addMessage)
    .get("/:messageId", getOneMessage)
// .delete("/destroy", destroyProduct)
// .delete("/delete/:productId", deleteProduct)

module.exports = router    
