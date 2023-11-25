import { configureStore } from "@reduxjs/toolkit"
import publicSlice from "./slice/publicSlice"
import adminSlice from "./slice/adminSlice"

const reduxStore = configureStore({
    reducer: {
        public: publicSlice,
        admin: adminSlice
    }
})

export default reduxStore