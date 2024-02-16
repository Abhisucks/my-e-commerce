const { addMessage, getAllMessage, getOneMessage, destroyMessage, deleteMessage } = require("../controllers/contactUsController")

const router = require("express").Router()

router
    .get("/", getAllMessage)
    .post("/add", addMessage)
    .get("/:messageId", getOneMessage)
    .delete("/destroy", destroyMessage)
    .delete("/delete/:messageId", deleteMessage)

module.exports = router    
