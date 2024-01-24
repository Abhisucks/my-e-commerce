const mongoose = require("mongoose")

const buySchema = mongoose.Schema({
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
        type: String,
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
    userId: {
        type: mongoose.Types.ObjectId,

    },
    paymentId: {
        type: String,

    }
})

module.exports = mongoose.model("buyproduct", buySchema)