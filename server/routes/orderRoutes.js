const { addUserOrders, getUserOrders, destroyUserOders, getOneUserOrders } = require("../controllers/ordersController")

const router = require("express").Router()

router
    .get("/", getUserOrders)
    .get("/yourorders/:userId", getOneUserOrders)
    .post("/addorder", addUserOrders)
    .delete("/remove", destroyUserOders)


module.exports = router  