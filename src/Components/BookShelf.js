import React from 'react';
import Book from './Book'



const BookShelf = (props) => {
  const { books, title, update} = props;
  const noBooks = "There Are No Books On This Shelf";

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} update={update}/>
          </li>
        ))}
      </ol>
      {!books.length && <h3>{noBooks}</h3>}
      </div>
    </div>
  )
}

export default BookShelf;