// postsActions.ts

import { Post } from '../../utils/types';
import { setPosts, addPost } from './postsSlice';

// Define the action creator to set the posts
export const fetchPosts = (postsData: Post[]) => (dispatch: any) => {
  // Perform API call or any asynchronous operation here to fetch posts data
  // For example, using axios or fetch to get posts data from the backend
  // Then dispatch the setPosts action with the received posts data
  dispatch(setPosts(postsData));
};

// Define the action creator to add a new post
export const createPost = (postData: Post) => (dispatch: any) => {
  // Perform API call or any asynchronous operation here to create a new post
  // For example, using axios or fetch to post the post data to the backend
  // Then dispatch the addPost action with the new post data
  dispatch(addPost(postData));
};
