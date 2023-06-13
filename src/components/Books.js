import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';

import Book from './Book';
import AddForm from './AddForm';

function BookList() {
  const books = useSelector((state) => state.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // const handleDelete = (id) => {
  //   // const newBooks = books.filter((book) => book.id !== id);
  //   // setBooks(newBooks);
  //   return books;
  // };

  const handleTitleChange = (e) => {
    if (e.target.value.trim() !== '') {
      setTitle(e.target.value);
    }
  };

  const handleAuthorChange = (e) => {
    if (e.target.value.trim() !== '') {
      setAuthor(e.target.value);
    }
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    // if (title.trim() === '' || author.trim() === '') {
    //   return;
    // }
    /* const newBook = {
      id: uuidv4(),
      ...(title && { title }),
      ...(author && { author }),
      progress: Math.random() * 100,
    }; */
    // setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
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
            // handleDelete={handleDelete}
          />
        ))}
      </div>
      <AddForm
        handleAdd={handleAddBook}
        handleTitle={handleTitleChange}
        handleAuthor={handleAuthorChange}
        title={title}
        author={author}
      />
    </section>
  );
}

export default BookList;
