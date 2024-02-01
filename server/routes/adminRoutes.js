const { addProduct, getAllProduct, getOneProduct, destroyProduct, deleteProduct, updateStock, updateProduct, } = require("../controllers/adminController")

const router = require("express").Router()

router
    .get("/", getAllProduct)
    .get("/:productId", getOneProduct)
    .post("/add", addProduct)
    .delete("/destroy", destroyProduct)
    .delete("/delete/:productId", deleteProduct)
    .put("/update/:productId", updateProduct)

    .put("/updatePro/stock", updateStock)

module.exports = router    
