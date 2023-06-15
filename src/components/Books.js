import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import Book from './Book';
import AddForm from './AddForm';
import { fetchBooks, addBook, deleteBook } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const [book, setBook] = useState('');

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...book, item_id: uuid(), category: 'Fiction' }));
    setBook({
      title: '',
      author: '',
      category: '',
    });
  };

  if (!Array.isArray(books)) {
    return (
      <AddForm
        handleAdd={handleAddBook}
        handleTitle={handleChange}
        handleAuthor={handleChange}
      />
    );
  }

  return (
    <section>
      <div className="books-container">
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            gender={book.category}
            title={book.title}
            author={book.author}
            // progress={book.progress}
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
