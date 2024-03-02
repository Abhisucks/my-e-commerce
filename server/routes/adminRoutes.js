const { addProduct, getAllProduct, getOneProduct, deleteProduct, updateStock, updateProduct, } = require("../controllers/adminController")
const { isAuthenticated } = require("../middleware/auth")
const { protected } = require("../middleware/protected")
const router = require("express").Router()


router
    .get("/", getAllProduct)
    .get("/:productId", isAuthenticated, getOneProduct)
    .post("/add", protected, addProduct)
    .delete("/delete/:productId", protected, deleteProduct)
    .put("/update/:productId", protected, updateProduct)
    // .delete("/destroy", destroyProduct)

    .put("/updatePro/stock", isAuthenticated, updateStock)

module.exports = router    
