const { addMessage, getAllMessage, getOneMessage, deleteMessage } = require("../controllers/contactUsController")
const { isAuthenticated } = require("../middleware/auth")
const { protected } = require("../middleware/protected")

const router = require("express").Router()

router
    .get("/", protected, getAllMessage)
    .post("/add", isAuthenticated, addMessage)
    .get("/:messageId", protected, getOneMessage)
    .delete("/delete/:messageId", protected, deleteMessage)
// .delete("/destroy", protected, destroyMessage)

module.exports = router    
