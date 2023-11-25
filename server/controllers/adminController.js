const asyncHandler = require("express-async-handler")
const Admin = require("../models/Admin")

exports.addProduct = asyncHandler(async (req, res) => {
    const result = await Admin.create(req.body)

    res.json({
        message: "Product Added Succssefully", result
    })
})

exports.getAllProduct = asyncHandler(async (req, res) => {
    const result = await Admin.find()

    res.json({
        message: "Product Fetch Succssefully", result
    })
})

exports.getOneProduct = asyncHandler(async (req, res) => {
    const { productId } = req.params
    const product = await Admin.findById(productId)

    res.json({
        message: "Product Fetch Succssefully", product
    })
})

exports.destroyProduct = asyncHandler(async (req, res) => {
    const result = await Admin.deleteMany()

    res.json({
        message: "Product Destroy Succssefully", result
    })
})

exports.deleteProduct = asyncHandler(async (req, res) => {
    const { productId } = req.params
    const result = await Admin.findByIdAndDelete(productId)

    res.json({
        message: "Product Delete Succssefully"
    })
})

exports.updateProduct = asyncHandler(async (req, res) => {
    const { productId } = req.params
    const result = await Admin.findByIdAndUpdate(productId, req.body, { new: true })

    res.json({
        message: "product update successfullly", result
    })
})

