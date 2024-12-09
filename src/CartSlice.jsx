import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
};
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {

        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
             // Update totalQuantity
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
        
             // Update totalQuantity
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    updateQuantity: (state, action) => {

        const { name, quantity} = action.payload;
        const itemToUpdate = state.items.find(item =>item.name === name);

        if (itemToUpdate){
            itemToUpdate.quantity = quantity;
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
        }
    },
  },
});
// Export the action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
// Export the reducer as the default export
export default CartSlice.reducer;