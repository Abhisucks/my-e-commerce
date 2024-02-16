const asyncHandler = require("express-async-handler")
const ContactUs = require("../models/ContactUs")

exports.addMessage = asyncHandler(async (req, res) => {
    const result = await ContactUs.create(req.body)

    res.json({
        message: "Message Sumitted Succssefully", result
    })
})

exports.getAllMessage = asyncHandler(async (req, res) => {
    const result = await ContactUs.find()

    res.json({
        message: "Messages Fetch Succssefully", result
    })
})

exports.getOneMessage = asyncHandler(async (req, res) => {
    const { messageId } = req.params
    const result = await ContactUs.findById(messageId)

    res.json({
        message: "Message Fetch Succssefully", result
    })
})

exports.destroyMessage = asyncHandler(async (req, res) => {
    const result = await ContactUs.deleteMany()

    res.json({
        message: "Messages Destroy Succssefully", result
    })
})

exports.deleteMessage = asyncHandler(async (req, res) => {
    const { messageId } = req.params
    const result = await ContactUs.findByIdAndDelete(messageId)

    res.json({
        message: "order Delete Succssefully",
        result
    })
})