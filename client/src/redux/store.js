import { configureStore } from "@reduxjs/toolkit"
import publicSlice from "./slice/publicSlice"
import adminSlice from "./slice/adminSlice"
import orderSlice from "./slice/orderSlice"
const reduxStore = configureStore({
    reducer: {
        public: publicSlice,
        admin: adminSlice,
        order: orderSlice
    }
})

export default reduxStore