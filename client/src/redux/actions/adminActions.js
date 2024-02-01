import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api"

export const addProduct = createAsyncThunk("admin/add-pro", async (productData, { rejectWithValue, getState }) => {
    try {
        await api.post("admin/add", productData)
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message || "something went wrong")
    }
})

export const getAllProduct = createAsyncThunk("admin/get-pro", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("admin/")
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message || "something went wrong")
    }
})
export const deleteProduct = createAsyncThunk("admin/delete-pro", async (productId, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.delete(`admin/delete/${productId}`)
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message || "something went wrong")
    }
})
export const editProduct = createAsyncThunk("admin/edit-pro", async (product, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.put(`admin/update/${product._id}`, product)
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message || "something went wrong")
    }
})

export const updateProStock = createAsyncThunk("admin/update-stock", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.put(`admin/updatePro/stock`, productData)
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message || "something went wrong")
    }
})

