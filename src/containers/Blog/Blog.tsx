// containers/Blog/Blog.tsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchBlogPosts } from '../features/posts/postsThunks';
import BlogPost from '../components/BlogPost/BlogPost';

const Blog: React.FC = () => {
  const dispatch = useDispatch();
  const { blogPosts, loading, error } = useSelector((state: RootState) => state.posts);

  React.useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* Display the list of blog posts */}
      {blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Blog;
