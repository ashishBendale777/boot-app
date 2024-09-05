import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems: []
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
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer

