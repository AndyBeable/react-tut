import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='Sam'
        timeAgo='Today at 4:45PM'
        text='Nice to meet you'
        image='https://source.unsplash.com/random'
      />
      <CommentDetail
        author='Alex'
        timeAgo='Today at 2:00PM'
        text='Hello there'
        image='https://source.unsplash.com/random'
      />
      <CommentDetail
        author='Iris'
        timeAgo='Yesterday at 9:00A M'
        text='Hola, que tal?'
        image='https://source.unsplash.com/random'
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
