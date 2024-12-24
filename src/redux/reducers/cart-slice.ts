import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
    id: number;
    price: number;
    quantity: number;
    totalPrice: number;
    name: string;
}

interface CartState {
    items: CartItem[];
    totalQuantity: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart(state: CartState, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            }
        },
        removeItemFromCart(state: CartState, action) {
            const id = Number(action.payload);
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem && existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else if (existingItem) {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        increaseItemQuantity(state: CartState, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quantity++;
            }
        },
        decreaseItemQuantity(state: CartState, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
          
            if (existingItem) {
              if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
              } else {
                existingItem.quantity--;
              }
            }
          },

    },
});

export const cartActions = cartSlice.actions
export default cartSlice;