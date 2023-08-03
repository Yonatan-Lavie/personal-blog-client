// containers/SingleBlogPost/SingleBlogPost.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchSingleBlogPost } from '../features/posts/postsThunks';
import BlogPost from '../components/BlogPost/BlogPost';

const SingleBlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const dispatch = useDispatch();
  const { singlePost, loading, error } = useSelector((state: RootState) => state.posts);

  React.useEffect(() => {
    dispatch(fetchSingleBlogPost(postId));
  }, [dispatch, postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* Display the full content of the single blog post */}
      {singlePost && <BlogPost post={singlePost} />}
    </div>
  );
};

export default SingleBlogPost;
