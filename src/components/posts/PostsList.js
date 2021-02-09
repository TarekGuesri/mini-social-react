import React from 'react';

import PostItem from './PostItem';
const posts = [
  { id: 1, title: 'Post 1', content: 'Hello World' },
  { id: 2, title: 'Post 2', content: 'Goodbye World' },
];

const PostsList = () => {
  return (
    <div style={{ maxWidth: '300px' }}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
