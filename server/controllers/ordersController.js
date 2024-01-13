const asyncHandler = require("express-async-handler")
const BuyProduct = require("../models/BuyProduct")

exports.addUserOrders = asyncHandler(async (req, res) => {
    const result = await BuyProduct.create(req.body)
    res.json({
        message: "User order Added successfully", result
    })
})

exports.getUserOrders = asyncHandler(async (req, res) => {
    const result = await BuyProduct.find()
    res.json({
        message: "Fetch User orders successfully", result
    })
})

exports.destroyUserOders = asyncHandler(async (req, res) => {
    const result = await BuyProduct.deleteMany()

    res.json({
        message: "User Orders Destroy Succssefully", result
    })
})
