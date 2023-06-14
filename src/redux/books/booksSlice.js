import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bookstoreAPI from '../bookstoreAPI';

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await bookstoreAPI.get('/books');
  return response.data;
});

const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await bookstoreAPI.post('/books', book);
  return response.data;
});

const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  await bookstoreAPI.delete(`/books/${bookId}`);
  return bookId;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.books = Object.entries(action.payload).map(
        ([itemId, itemData]) => ({
          item_id: itemId,
          ...itemData[0],
        }),
      );
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      const newItem = {
        item_id: Object.keys(action.payload)[0],
        ...Object.values(action.payload)[0][0],
      };
      state.books.push(newItem);
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    });
  },
});

export { fetchBooks, addBook, deleteBook };
export default booksSlice.reducer;
