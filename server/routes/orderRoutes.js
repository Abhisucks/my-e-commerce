const { addUserOrders, getUserOrders, getOneUserOrders, deleteOneOrder } = require("../controllers/ordersController")
const { isAuthenticated } = require("../middleware/auth")
const { protected } = require("../middleware/protected")
const router = require("express").Router()

router
    .get("/", protected, getUserOrders)
    .get("/yourorders/:userId", isAuthenticated, getOneUserOrders)
    .post("/addorder", isAuthenticated, addUserOrders)
    .delete("/remove/:orderId", protected, deleteOneOrder)
// .delete("/remove", protected, destroyUserOders)


module.exports = router  