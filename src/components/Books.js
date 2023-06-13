import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import Book from './Book';
import AddForm from './AddForm';
import { addBook, deleteBook } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const [book, setBook] = useState('');

  const handleChange = (e) => {
    if (e.target.value.trim() !== '') {
      setBook({ ...book, [e.target.name]: e.target.value });
    }
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...book, item_id: uuid() }));
  };

  return (
    <section>
      <div className="books-container">
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            progress={book.category}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <AddForm
        handleAdd={handleAddBook}
        handleTitle={handleChange}
        handleAuthor={handleChange}
      />
    </section>
  );
}

export default BookList;
