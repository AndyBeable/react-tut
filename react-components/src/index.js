import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h4>Warning</h4>Are you sure you to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:45PM'
          text='Nice to meet you'
          image='https://source.unsplash.com/random'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Alex'
          timeAgo='Today at 2:00PM'
          text='Hello there'
          image='https://source.unsplash.com/random'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Iris'
          timeAgo='Yesterday at 9:00A M'
          text='Hola, que tal?'
          image='https://source.unsplash.com/random'
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
