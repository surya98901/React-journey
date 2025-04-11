import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
    name : "Cart",
    initialState : {
        items:[],
    },
    reducers : {
        addItem :(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem : (state, action)=>{
            state.items = state.items.filter((item)=> item.id !== action.payload.id);
        },
        deleteItems : (state)=> {
            state.items.lenght = 0;
        }
    }
});

export const {addItem,removeItem,deleteItems} = CartSlice.actions;
export default CartSlice.reducer;