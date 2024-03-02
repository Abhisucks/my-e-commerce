const { getAllUser, registerUser, updateUser, deleteUser, loginUser, logoutUser, getKey, paymentVerification, checkout, getpaymentVeri, } = require("../controllers/userController")
const { isAuthenticated } = require("../middleware/auth")
const { protected } = require("../middleware/protected")

const router = require("express").Router()

router
    .get("/", protected, getAllUser)
    .post("/register", registerUser)
    .delete("/delete/:userId", protected, deleteUser)
    .put("/update/:userId", protected, updateUser)
    .post("/login", loginUser)
    .post("/logout", logoutUser)
    .get("/paymentkey", isAuthenticated, getKey)
    .post("/checkout", isAuthenticated, checkout)
    .post("/paymentVeri", isAuthenticated, paymentVerification)
    .post("/getpaymentVeri", isAuthenticated, getpaymentVeri)
// .delete("/destroy", destroyAllUser)


module.exports = router    
