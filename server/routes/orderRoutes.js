const { addUserOrders, getUserOrders, destroyUserOders } = require("../controllers/ordersController")

const router = require("express").Router()

router
    .get("/", getUserOrders)
    .post("/addorder", addUserOrders)
    .delete("/remove", destroyUserOders)


module.exports = router  