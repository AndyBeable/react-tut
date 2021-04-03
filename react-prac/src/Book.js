import React from 'react';

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
export default Book;
