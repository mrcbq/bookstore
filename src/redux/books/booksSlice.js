import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const userSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      const foundBook = state.find((book) => book.id === action.payload);
      if (foundBook) {
        state.splice(state.indexOf(foundBook), 1);
      }
    },
  },
});

export const { addBook, deleteBook } = userSlice.actions;
export default userSlice.reducer;
