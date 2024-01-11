const { getAllUser, registerUser, destroyAllUser, updateUser, deleteUser, loginUser, logoutUser, getKey, paymentVerification, checkout, getpaymentVeri, } = require("../controllers/userController")

const router = require("express").Router()

router
    .get("/", getAllUser)
    .post("/register", registerUser)
    .delete("/destroy", destroyAllUser)
    .delete("/delete/:userId", deleteUser)
    .put("/update/:userId", updateUser)
    .post("/login", loginUser)
    .post("/logout", logoutUser)
    .get("/paymentkey", getKey)
    .post("/checkout", checkout)
    .post("/paymentVeri", paymentVerification)
    .post("/getpaymentVeri", getpaymentVeri)





module.exports = router    
