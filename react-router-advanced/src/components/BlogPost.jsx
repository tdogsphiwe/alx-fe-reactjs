import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  return <div>Viewing blog post {id}</div>;
}

export default BlogPost;