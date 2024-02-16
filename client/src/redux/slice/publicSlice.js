import { createSlice } from "@reduxjs/toolkit"
import { CheckOutway, addUserMessage, getAllUsers, getUserMessage, loginUser, logoutUser, registerUser } from "../actions/publicActions";
import { toast } from 'react-toastify'


const publicSlice = createSlice({
    name: "public",
    initialState: {
        login: JSON.parse(localStorage.getItem("loginInfoo")),
        // cart: (
        //     JSON.parse(localStorage.getItem("cart")) || []
        // ).filter((item) => item.userId === (JSON.parse(localStorage.getItem("loginInfoo")).id)),

        cart: JSON.parse(localStorage.getItem("cart")) || [],
        total: JSON.parse(localStorage.getItem("total"))

    },
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            });
        },
        // addToCart: (state, { payload }) => {
        //     state.cart.push(payload)
        //     state.total = state.cart.reduce((total, item) => total + (item.qty * item.price), 0)
        //     localStorage.setItem("cart", JSON.stringify(state.cart))
        //     localStorage.setItem("total", JSON.stringify(state.total));

        // },
        // addToCart: (state, { payload }) => {
        //     // Check if the item already exists in the cart
        //     const existingItemIndex = state.cart.findIndex(item => item._id === payload._id);

        //     if (existingItemIndex !== -1) {
        //         // Item already exists, update the quantity instead of adding a new item
        //         state.cart[existingItemIndex].qty += payload.qty;
        //     } else {
        //         // Item doesn't exist, push it to the cart
        //         state.cart.push(payload);
        //     }

        //     // Recalculate the total
        //     state.total = state.cart.reduce((total, item) => total + (item.qty * item.price), 0);

        //     // Update localStorage
        //     localStorage.setItem("cart", JSON.stringify(state.cart));
        //     localStorage.setItem("total", JSON.stringify(state.total));
        // },

        addToCart: (state, { payload }) => {
            // Check if the item already exists in the cart
            const existingItemIndex = state.cart.findIndex(item => item._id === payload._id);

            if (existingItemIndex !== -1) {
                // Item already exists, update the quantity instead of adding a new item

                // Check if adding the payload.qty exceeds the item count
                if (state.cart[existingItemIndex].qty + payload.qty <= payload.count) {
                    state.cart[existingItemIndex].qty += payload.qty;
                    toast.success("Added To Cart", { autoClose: 300 })

                } else {
                    // Handle the case where adding more quantity exceeds the count
                    console.warn("Cannot add more quantity. Item is out of stock.");
                    toast.error("Product Is Out Of Stock", { autoClose: 600 })

                }
            } else {
                // Item doesn't exist, push it to the cart

                // Check if adding the payload.qty exceeds the item count
                if (payload.qty <= payload.count) {
                    state.cart.push(payload);
                    toast.success("Added To Cart", { autoClose: 300 })

                } else {
                    // Handle the case where adding more quantity exceeds the count
                    console.warn("Cannot add more quantity. Item is out of stock.");
                    toast.error("Product Is Out Of Stock", { autoClose: 600 })
                }
            }

            // Recalculate the total
            state.total = state.cart.reduce((total, item) => total + (item.qty * item.price), 0);

            // Update localStorage
            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("total", JSON.stringify(state.total));
        },


        clearCart: (state) => {
            state.cart = [];
            state.total = 0;
            localStorage.removeItem("cart");
            localStorage.removeItem("total");
        },


        deleteCartItem: (state, { payload }) => {
            state.cart.splice(payload, 1)
            state.total = state.cart.reduce((total, item) => total + (item.qty * item.price), 0)
            localStorage.setItem("cart", JSON.stringify(state.cart))
            localStorage.setItem("total", JSON.stringify(state.total));
        },


        // // Action to increment the quantity of an item in the cart
        // incrementCartItem: (state, { payload }) => {
        //     state.cart[payload].qty += 1;
        //     state.total = state.cart.reduce((total, item) => total + (item.qty * item.price), 0);
        //     localStorage.setItem("cart", JSON.stringify(state.cart));
        //     localStorage.setItem("total", JSON.stringify(state.total));
        // },

        // Action to increment the quantity of an item in the cart
        incrementCartItem: (state, { payload }) => {
            const item = state.cart[payload];

            // Check if the quantity is less than the count
            if (item.qty < item.count) {
                // Increment the quantity
                item.qty += 1;

                // Update the total
                state.total = state.cart.reduce((total, item) => total + item.qty * item.price, 0);

                // Update localStorage
                localStorage.setItem("cart", JSON.stringify(state.cart));
                localStorage.setItem("total", JSON.stringify(state.total));
            } else {
                // Handle the case where the quantity is already equal to or greater than the count
                console.warn("Cannot add more quantity. Item is out of stock.");
                toast.error("Product Is Out Of Stock", { autoClose: 600 })
            }
        },


        // Action to decrement the quantity of an item in the cart
        decrementCartItem: (state, { payload }) => {
            if (state.cart[payload].qty > 1) {
                state.cart[payload].qty -= 1;
                state.total = state.cart.reduce((total, item) => total + (item.qty * item.price), 0);
                localStorage.setItem("cart", JSON.stringify(state.cart));
                localStorage.setItem("total", JSON.stringify(state.total));
            }
        },
    },
    extraReducers: builder => builder
        .addCase(registerUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(registerUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.userAdded = true
        })
        .addCase(registerUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(loginUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(loginUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.login = payload
        })
        .addCase(loginUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(logoutUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(logoutUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.login = false
        })
        .addCase(logoutUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(getAllUsers.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getAllUsers.fulfilled, (state, { payload }) => {
            state.loading = false
            state.users = payload
        })
        .addCase(getAllUsers.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(CheckOutway.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(CheckOutway.fulfilled, (state, { payload }) => {
            state.loading = false
            state.checked = true
        })
        .addCase(CheckOutway.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(addUserMessage.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(addUserMessage.fulfilled, (state, { payload }) => {
            state.loading = false
            state.messageAdded = true
        })
        .addCase(addUserMessage.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(getUserMessage.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getUserMessage.fulfilled, (state, { payload }) => {
            state.loading = false
            state.messages = payload
        })
        .addCase(getUserMessage.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })
})

export const { invalidate, addToCart, incrementCartItem, decrementCartItem, deleteCartItem, clearCart } = publicSlice.actions
export default publicSlice.reducer