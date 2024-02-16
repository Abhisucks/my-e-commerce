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
        message: "Messages Fetch Succssefully", result
    })
})

exports.getOneMessage = asyncHandler(async (req, res) => {
    const { messageId } = req.params
    const result = await Contact.findById(messageId)

    res.json({
        message: "Message Fetch Succssefully", result
    })
})

exports.destroyMessage = asyncHandler(async (req, res) => {
    const result = await Contact.deleteMany()

    res.json({
        message: "Messages Destroy Succssefully", result
    })
})

exports.deleteMessage = asyncHandler(async (req, res) => {
    const { messageId } = req.params
    const result = await Contact.findByIdAndDelete(messageId)

    res.json({
        message: "order Delete Succssefully",
        result
    })
})