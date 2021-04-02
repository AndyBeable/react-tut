import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList() {
  return (
    <section className='book-list'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const title = 'They Book Die at the End';
  const author = 'Adam Silvera';

  return (
    <article className='book'>
      <img src='https://m.media-amazon.com/images/I/815TTLvJUFL._AC_UY218_.jpg' />
      <h2>{title}</h2>
      <h3>{author.toUpperCase()}</h3>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
