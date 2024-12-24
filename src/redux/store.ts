import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import cartSlice from './reducers/cart-slice';
import sortingSlice from './reducers/sorting-slice';
import searchSlice from './reducers/search-slice';


//Store has been created with scalability in mind, this method of using reducers ensure addition of multiple reducers in future
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    sorting : sortingSlice.reducer,
    search : searchSlice.reducer
  },
});

store.subscribe(() => {
  const state = store.getState().cart;
  localStorage.setItem('cartItems', JSON.stringify(state.items));
  localStorage.setItem('cartTotalQuantity', state.totalQuantity.toString());
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;