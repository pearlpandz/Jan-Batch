import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "Cart Slice",
    initialState: [],
    reducers: {
        addCartItem: (state, data) => {
            state.push(data.payload);
            return state;
        }
    }
});

export const { addCartItem } = cartSlice.actions

export default cartSlice.reducer;