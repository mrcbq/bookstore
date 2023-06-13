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

// Create a directory that will contain all your Redux logic (/src/redux)
// Configure a Redux store (/src/redux/store.js)
// Define a slice of state for books that:
// Includes an array of books (initial state: empty array)
// Includes a reducer that adds a book
// Includes a reducer that removes a book
// Define a slice of state for categories that:
// Includes an array of categories (initial state: empty array)
// eslint-disable-next-line max-len
// Includes a reducer that checks the status and always returns "Under construction" (the initial state should check to that string)
