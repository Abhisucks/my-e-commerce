const asyncHandler = require("express-async-handler")
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Razorpay = require("razorpay")
const crypto = require("crypto")
const Payment = require("../models/Payment")




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

    const token = jwt.sign({ userId: found._id, role: found.role }, process.env.JWT_KEY)

    res.cookie("jwt", token, {
        // maxAge: 1000 * 60 * 60 * 24, // 24 hours
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "None",
        secure: true,
        // domain: ".onrender.com"
    });


    res.json({
        message: "Login Success",
        result: {
            name: found.name,
            id: found._id,
            role: found.role,
            token: token
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
            key_id: process.env.RAZORPAY_API_KEY,
            key_secret: process.env.RAZORPAY_APT_SECRET,
        });
        const options = {
            amount: Number(req.body.amount * 100),
            currency: "INR",
        };
        const order = await instance.orders.create(options);

        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        console.log(error.message);
    }
};

exports.paymentVerification = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // Database comes here

            await Payment.create({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
            });

            res.redirect(
                `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
            );
        } else {
            res.status(400).json({
                success: false,
            });
        }
    } catch (error) {
        console.log(error.message)
    }
};


exports.getKey = async (req, res) => {
    try {
        res.json({
            key: process.env.RAZORPAY_API_KEY,
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to get Keyid" + error
        })
    }

}

exports.getpaymentVeri = async (req, res) => {

    try {
        const result = await Payment.find()

        res.json({
            message: "payment Fetch Succssefully", result
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to get " + error
        })
    }
}

