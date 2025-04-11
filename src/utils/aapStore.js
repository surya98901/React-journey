import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"; 
// cartReducer is imported from CartSlice.js as a default export (we can refer the default export of a component with any reference name).
const appStore = configureStore({
    reducer:{
        cart : cartReducer,
    },

});

export default appStore;