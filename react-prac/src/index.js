import React from 'react';
import ReactDOM from 'react-dom';

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src='https://m.media-amazon.com/images/I/815TTLvJUFL._AC_UY218_.jpg' />
);

const Title = () => <h2>They Book Die at the End</h2>;
const Author = () => <h3>Adam Silvera</h3>;

ReactDOM.render(<BookList />, document.getElementById('root'));
