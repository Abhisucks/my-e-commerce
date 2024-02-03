import { createSlice } from "@reduxjs/toolkit";
import { addUserOrders, deleteOneOrder, getAllOrders, getOneUserOrders } from "../actions/orderActions";

const orderSlice = createSlice({
    name: "order",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            });
        }
    },
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
        .addCase(getAllOrders.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getAllOrders.fulfilled, (state, { payload }) => {
            state.loading = false
            state.orders = payload
        })
        .addCase(getAllOrders.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(getOneUserOrders.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getOneUserOrders.fulfilled, (state, { payload }) => {
            state.loading = false
            state.yourOrders = payload
        })
        .addCase(getOneUserOrders.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(deleteOneOrder.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(deleteOneOrder.fulfilled, (state, { payload }) => {
            state.loading = false
            state.orderDeleted = payload
        })
        .addCase(deleteOneOrder.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = orderSlice.actions
export default orderSlice.reducer
