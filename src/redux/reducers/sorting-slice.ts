import { createSlice } from '@reduxjs/toolkit';

interface SortingState {
  sortBy: 'oldest' | 'newest' | 'cheapest' | 'mostExpensive';
}

const initialState: SortingState = {
  sortBy: 'newest',
};

const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSortBy } = sortingSlice.actions;
export default sortingSlice;