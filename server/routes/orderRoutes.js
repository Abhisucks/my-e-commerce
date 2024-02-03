const { addUserOrders, getUserOrders, destroyUserOders, getOneUserOrders, deleteOneOrder } = require("../controllers/ordersController")

const router = require("express").Router()

router
    .get("/", getUserOrders)
    .get("/yourorders/:userId", getOneUserOrders)
    .post("/addorder", addUserOrders)
    .delete("/remove/:orderId", deleteOneOrder)
    .delete("/remove", destroyUserOders)


module.exports = router  