import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [
  {
    img: 'https://m.media-amazon.com/images/I/815TTLvJUFL._AC_UY218_.jpg',
    title: 'They Book Die at the End',
    author: 'Adam Silvera',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81qqNcIoyiL._AC_UY218_.jpg',
    title: 'American Dirt',
    author: 'Jeanine Cummins',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81I8+1VJrML._AC_UY218_.jpg',
    title: 'The Madness of Grief',
    author: 'Richard Coles',
  },
];

function BookList() {
  return (
    <section className='book-list'>
      {books.map(book => {
        const { img, title, author } = book;
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = props => {
  const { img, title, author } = props.book;
  return (
    <article className='book'>
      <img src={img} alt='book cover' />
      <h2>{title}</h2>
      <h3>{author}</h3>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
