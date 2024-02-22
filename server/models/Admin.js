const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    category: {
        type: String,
        require: [true, "category is required"]
    },
    img: {
        type: String,
        require: [true, "img is required"]
    },
    title: {
        type: String,
        require: [true, "title is required"]
    },
    price: {
        type: Number,
        require: [true, "Price is required"]
    },
    qty: {
        type: Number,
        require: [true, "qty is required"]
    },
    count: {
        type: Number,
        require: [true, "Count is required"]
    },
    featured: {
        type: Boolean,
        default: false
    },

}, { timestamps: true })

module.exports = mongoose.model("admin", adminSchema)