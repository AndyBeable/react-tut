import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/815TTLvJUFL._AC_UY218_.jpg',
  title: 'They Book Die at the End',
  author: 'Adam Silvera',
};
const secondBook = {
  img: 'https://m.media-amazon.com/images/I/81qqNcIoyiL._AC_UY218_.jpg',
  title: 'American Dirt',
  author: 'Jeanine Cummins',
};

function BookList() {
  return (
    <section className='book-list'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = props => {
  return (
    <article className='book'>
      <img src={props.img} alt='book cover' />
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
