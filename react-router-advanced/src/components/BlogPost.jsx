import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();
  return <div>Viewing blog post {postId}</div>;
}

export default BlogPost;