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
        }
    }
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer