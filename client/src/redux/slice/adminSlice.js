import { createSlice } from "@reduxjs/toolkit"
import { addProduct, deleteProduct, editProduct, getAllProduct, updateProStock } from "../actions/adminActions";

const adminSlice = createSlice({
    name: "admin",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            });
        }
    },
    extraReducers: builder => builder
        .addCase(addProduct.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(addProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.productAdded = payload
        })
        .addCase(addProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })
        .addCase(getAllProduct.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getAllProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.allProducts = payload
        })
        .addCase(getAllProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })
        .addCase(deleteProduct.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(deleteProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.ProductDeleted = payload
        })
        .addCase(deleteProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })
        .addCase(editProduct.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(editProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.ProductEdited = payload
        })
        .addCase(editProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(updateProStock.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(updateProStock.fulfilled, (state, { payload }) => {
            state.loading = false
            state.stockUpdated = payload
        })
        .addCase(updateProStock.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


})

export const { invalidate } = adminSlice.actions
export default adminSlice.reducer