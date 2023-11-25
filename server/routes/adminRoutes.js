const { addProduct, getAllProduct, getOneProduct, destroyProduct, updateProduct, deleteProduct } = require("../controllers/adminController")

const router = require("express").Router()

router
    .get("/", getAllProduct)
    .get("/:productId", getOneProduct)
    .post("/add", addProduct)
    .delete("/destroy", destroyProduct)
    .delete("/delete/:productId", deleteProduct)
    .put("/update/:productId", updateProduct)

module.exports = router    
