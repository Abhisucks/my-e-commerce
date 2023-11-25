const expressAsyncHandler = require("express-async-handler")
const BuyProduct = require("../models/BuyProduct")

exports.addToCard = expressAsyncHandler(async (req, res) => {
    const result = await BuyProduct.create(req.body)

    res.json({
        message: "Product Added To Cart", result
    })
})