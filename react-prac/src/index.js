import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/815TTLvJUFL._AC_UY218_.jpg',
    title: 'They Book Die at the End',
    author: 'Adam Silvera',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/81qqNcIoyiL._AC_UY218_.jpg',
    title: 'American Dirt',
    author: 'Jeanine Cummins',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/81I8+1VJrML._AC_UY218_.jpg',
    title: 'The Madness of Grief',
    author: 'Richard Coles',
  },
];

function BookList() {
  return (
    <section className='book-list'>
      {books.map(book => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  const clickHandler = e => {
    alert('You bought a book');
  };

  const logAuthor = author => {
    console.log(author);
  };

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='book cover' />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h3>{author}</h3>
      <button type='button' onClick={clickHandler}>
        Buy now
      </button>
      <button type='button' onClick={() => logAuthor(author)}>
        Log Author
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
