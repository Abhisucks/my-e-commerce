import { createSlice } from "@reduxjs/toolkit";
import { addUserOrders } from "../actions/orderActions";

const orderSlice = createSlice({
    name: "order",
    initialState: {},
    reducers: {},
    extraReducers: builder => builder
        .addCase(addUserOrders.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(addUserOrders.fulfilled, (state, { payload }) => {
            state.loading = false
            state.orderAdded = true
        })
        .addCase(addUserOrders.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export default orderSlice.reducer
