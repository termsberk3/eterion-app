import { cartActions } from "../redux/reducers/cart-slice";
import cartSlice from "../redux/reducers/cart-slice";

describe('cartSlice', () => {
    const initialState = {
        items: [],
        totalQuantity: 0,
    };

    it('should handle adding a new item to the cart', () => {
        const newItem = { id: 1, name: 'Item 1', price: 100 };
        const action = cartActions.addItemToCart(newItem);
        const result = cartSlice.reducer(initialState, action);

        expect(result.items).toHaveLength(1);
        expect(result.items[0]).toEqual({
            id: 1,
            name: 'Item 1',
            price: 100,
            quantity: 1,
            totalPrice: 100,
        });
        expect(result.totalQuantity).toBe(1);
    });

    it('should handle increasing the quantity of an existing item', () => {
        const stateWithItem = {
            items: [{ id: 1, name: 'Item 1', price: 100, quantity: 1, totalPrice: 100 }],
            totalQuantity: 1,
        };
        const action = cartActions.addItemToCart({ id: 1, name: 'Item 1', price: 100 });
        const result = cartSlice.reducer(stateWithItem, action);

        expect(result.items[0].quantity).toBe(2);
        expect(result.items[0].totalPrice).toBe(200);
        expect(result.totalQuantity).toBe(2);
    });

    it('should handle removing an item from the cart', () => {
        const stateWithItem = {
            items: [{ id: 1, name: 'Item 1', price: 100, quantity: 1, totalPrice: 100 }],
            totalQuantity: 1,
        };
        const action = cartActions.removeItemFromCart(1);
        const result = cartSlice.reducer(stateWithItem, action);

        expect(result.items).toHaveLength(0);
        expect(result.totalQuantity).toBe(0);
    });

    it('should handle decreasing the quantity of an item', () => {
        const stateWithItem = {
            items: [{ id: 1, name: 'Item 1', price: 100, quantity: 2, totalPrice: 200 }],
            totalQuantity: 2,
        };
        const action = cartActions.decreaseItemQuantity(1);
        const result = cartSlice.reducer(stateWithItem, action);

        expect(result.items[0].quantity).toBe(1);
        expect(result.items[0].totalPrice).toBe(100);
        expect(result.totalQuantity).toBe(1);
    });

    it('should remove an item when its quantity is decreased to zero', () => {
        const stateWithItem = {
            items: [{ id: 1, name: 'Item 1', price: 100, quantity: 1, totalPrice: 100 }],
            totalQuantity: 1,
        };
        const action = cartActions.decreaseItemQuantity(1);
        const result = cartSlice.reducer(stateWithItem, action);

        expect(result.items).toHaveLength(0);
        expect(result.totalQuantity).toBe(0);
    });
});