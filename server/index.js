const express = require("express")
require("dotenv").config({ path: "./.env" })
const mongoose = require("mongoose")
const cors = require("cors")

mongoose.connect(process.env.MONGO_URL)
const app = express()
const PORT = process.env.PORT

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true

}))

app.use(express.json()) //body parser
app.use("/api/user", require("./routes/userRoutes"))
app.use("/api/admin", require("./routes/adminRoutes"))
app.use("/api/cart", require("./routes/productsRoutes"))

mongoose.connection.once("open", () => {
    console.log("Database Conected");
    app.listen(PORT, console.log(`http://localhost:${PORT}`))
})

mongoose.connection.on("error", (err) => {
    console.log("unable to connect to database", err)
})

// RAZORPAY_KEY=rzp_test_wFu94FLyTEB41s
// RAZORPAY_SECRET_KEY=bYwvKfdOJmb5Kr9ptr0