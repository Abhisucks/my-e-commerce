const asyncHandler = require("express-async-handler")
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Razorpay = require("razorpay")
const crypto = require("crypto")




exports.registerUser = asyncHandler(async (req, res) => {
    const { email } = req.body
    const found = await User.findOne({ email: email })

    if (found) {
        return res.status(400).json({
            message: "Email Already Register"
        })
    }

    const hashpassword = bcrypt.hashSync(req.body.password, 10)
    const result = await User.create({ ...req.body, password: hashpassword, role: "user" })

    res.json({
        message: "User Register Successfully", result
    })
})

exports.getAllUser = asyncHandler(async (req, res) => {
    const result = await User.find()

    res.json({
        message: "User Fetch Succssefully", result
    })
})

exports.destroyAllUser = asyncHandler(async (req, res) => {
    const result = await User.deleteMany()

    res.json({
        message: "User destroy Succssefully"
    })
})

exports.updateUser = asyncHandler(async (req, res) => {
    const { userId } = req.params
    const result = await User.findByIdAndUpdate(userId, req.body, { new: true })

    res.json({
        message: "User Update Succssefully", result
    })
})

exports.deleteUser = asyncHandler(async (req, res) => {
    const { userId } = req.params
    const result = await User.findByIdAndDelete(userId)

    res.json({
        message: "User Delete Succssefully", result
    })
})

exports.loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const found = await User.findOne({ email })

    if (!found) {
        return res.status(401).json({
            message: "Invalid Email"
        })
    }

    const match = await bcrypt.compare(password, found.password)
    if (!match) {
        return res.status(401).json({
            message: "Invalid Password"
        })
    }

    const token = jwt.sign({ userId: found._id }, process.env.JWT_KEY)
    res.cookie("jwt", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true
    })

    res.json({
        message: "Login Success",
        result: {
            name: found.name,
            id: found._id,
            role: found.role
        }
    })
})

exports.logoutUser = asyncHandler(async (req, res) => {
    res.clearCookie("jwt")
    res.json({
        message: "Logout Succssefully"
    })
})

exports.checkout = async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.REZORPAY_KEY,
            key_secret: process.env.REZORPAY_SECRET_KEY,
        });

        const options = {

            amount: Number(req.body.total * 100),
            // amount: req.body.total,
            currency: "INR",
        }
        // console.log(options.amount)

        const order = await instance.orders.create(options);

        // console.log(order)
        res.json({
            success: true,
            order
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble payment" + error
        })
    }
}


exports.paymentVerfication = async (req, res) => {
    try {

        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body
        let body = razorpay_order_id + "|" + razorpay_payment_id
        // const key = `${razorpay_order_id}|${razorpay_payment_id}`
        const expectedSignature = crypto
            .createHmac("sha256", process.env.REZORPAY_SECRET_KEY)
            .update(body.toString())
            .digest("hex")

        const isAuthentic = expectedSignature === razorpay_signature
        if (isAuthentic) {
            res.redirect(`http://localhost:5000/paymentsuccess?reference=${razorpay_payment_id}`)
        } else {
            res.status(400).json({
                success: false
            })
        }

        // res.json({
        //     success: true,
        //     razorpay_payment_id

        // })
    } catch (error) {
        res.status(400).json({
            message: "Unble paymentVerifcation" + error
        })
    }
}


exports.getKey = async (req, res) => {
    try {
        //     app.get("/user/getkey", (req, res) =>
        // res.status(200).json({ key: process.env.REZORPAY_KEY }))
        // const result = await User.find()
        res.json({
            key: process.env.REZORPAY_KEY,
            // message: "All Users get Successfully",

        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to get Keyid" + error
        })
    }
}

