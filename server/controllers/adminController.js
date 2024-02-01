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



exports.updateStock = asyncHandler(async (req, res) => {
    const cartItems = req.body;

    const results = [];

    for (const cartItem of cartItems) {
        const productId = cartItem.productId;
        const quantity = cartItem.qty;
        const stock = cartItem.count;

        console.log(`Product ID: ${productId}`);

        try {
            // Find and update the Admin document by productId
            const updatedAdmin = await Admin.findOneAndUpdate(
                { _id: productId },
                { $set: { count: stock - quantity } }, // Subtract quantity from count
                { new: true } // Return the updated document
            );

            results.push(updatedAdmin);
        } catch (error) {
            console.error(`Error updating stock for productId ${productId}: ${error.message}`);
            results.push({ error: `Failed to update stock for productId ${productId}` });
        }
    }

    res.json({
        message: "Order stock updated successfully",
        results,
    });
});




