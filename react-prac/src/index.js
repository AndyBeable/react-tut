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
      >
        <p>
          Some text here. Some text here. Some text here. Some text here. Some
          text here. Some text here. Some text here. Some text here. Some text
          here.
        </p>
      </Book>
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
  // can also destructure props ({ img, title, author, children}})
  // or can destructure like by passing props in to variable
  // const {img, title, author, children} = props;

  return (
    <article className='book'>
      <img src={props.img} alt='book cover' />
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      {props.children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
