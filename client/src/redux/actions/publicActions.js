import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api.js";

export const registerUser = createAsyncThunk("user/register", async (userData, { rejectWithValue, getState }) => {
    try {
        await api.post("user/register", userData)
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message || "something went wrong")
    }
})

export const loginUser = createAsyncThunk("user/login", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("user/login", userData)
        localStorage.setItem("loginInfoo", JSON.stringify(data.result))
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message || "something went wrong")

    }
})
export const getAllUsers = createAsyncThunk("user/get", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("user/")
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message || "something went wrong")

    }
})

export const logoutUser = createAsyncThunk("user/logout", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("user/logout", userData)
        localStorage.removeItem("loginInfoo")
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message || "something went wrong")
    }
})


export const CheckOutway = createAsyncThunk("checkout", async (check, { rejectWithValue, getState }) => {
    try {
        const { data: { key } } = await api.get("/user/paymentkey")
        const { data: { order } } = await api.post("/user/checkout", check)



        const options = {
            key: key,
            amount: order.amount,
            currency: "INR",
            name: "My E-Commarce",
            description: "Test Transaction",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU",
            order_id: order.id,
            callback_url: "http://localhost:5000/api/user/paymentVeri",
            prefill: {
                name: "Abhi Sucks",
                email: "abhi.sucks@example.com",
                contact: "8459990245"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        const rezer = new window.Razorpay(options);
        rezer.open();
        return true

    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})








