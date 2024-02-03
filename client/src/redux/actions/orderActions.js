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

export const getAllOrders = createAsyncThunk("order/get", async (orderData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("orders/")
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message || "something went wrong")
    }
})

export const getOneUserOrders = createAsyncThunk("order/get/user", async (userOrderId, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get(`orders/yourorders/${userOrderId}`)
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message || "something went wrong")
    }
})

export const deleteOneOrder = createAsyncThunk("order/delete/user", async (userOrderId, { rejectWithValue, getState }) => {
    try {
        await api.delete(`orders/remove/${userOrderId}`)
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message || "something went wrong")
    }
})

