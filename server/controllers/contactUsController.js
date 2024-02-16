const asyncHandler = require("express-async-handler")
const Contact = require("../models/Contact")

exports.addMessage = asyncHandler(async (req, res) => {
    const result = await Contact.create(req.body)

    res.json({
        message: "Message Sumitted Succssefully", result
    })
})
exports.getAllMessage = asyncHandler(async (req, res) => {
    const result = await Contact.find()

    res.json({
        message: "Message Sumitted Succssefully", result
    })
})