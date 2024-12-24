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
    items: JSON.parse(localStorage.getItem('cartItems') as string) || [],
    totalQuantity: Number(localStorage.getItem('cartTotalQuantity')) || 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {
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
            localStorage.setItem('cartItems', JSON.stringify(state.items));
            localStorage.setItem('cartTotalQuantity', state.totalQuantity.toString());
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem && existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else if (existingItem) {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.items));
            localStorage.setItem('cartTotalQuantity', state.totalQuantity.toString());
        },
        increaseItemQuantity(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.items));
            localStorage.setItem('cartTotalQuantity', state.totalQuantity.toString());
        },
        decreaseItemQuantity(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter((item) => item.id !== id);
                } else {
                    existingItem.quantity--;
                }
            }
            localStorage.setItem('cartItems', JSON.stringify(state.items));
            localStorage.setItem('cartTotalQuantity', state.totalQuantity.toString());
        },
    },
});

export const cartActions = cartSlice.actions
export default cartSlice;