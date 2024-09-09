import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems: [],
    cartTotal: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            let newItem = { ...action.payload, Qty: 1 }
            state.cartItems = [...state.cartItems, newItem]
        },
        removeItem: (state, action) => {
            let pid = action.payload.pid
            state.cartItems = state.cartItems.filter((item) => item.id != pid)
        },
        increQty: (state, action) => {
            let prod = state.cartItems.find((itm) => itm.id == action.payload.pid)
            prod.Qty += 1
        },
        decreQty: (state, action) => {
            let prod = state.cartItems.find((itm) => itm.id == action.payload.pid)
            prod.Qty -= 1
        },
        calculateTotal: (state) => {
            let totalAmount = 0
            state.cartItems.forEach((prod) => {
                totalAmount += prod.price * prod.Qty
            })
            state.cartTotal = totalAmount
        }
    }
})

export const { addItem, calculateTotal, removeItem, increQty, decreQty } = cartSlice.actions

export default cartSlice.reducer

