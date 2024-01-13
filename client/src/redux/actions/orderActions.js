import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api"

export const addUserOrders = createAsyncThunk("order/added", async (orderData, { rejectWithValue, getState }) => {
    try {
        await api.post("orders/addorder", orderData)
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message || "something went wrong")
    }
})