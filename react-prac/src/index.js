import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { books } from './data';
import Book from './Book';

function BookList() {
  return (
    <section className='book-list'>
      {books.map(book => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));
