// postsThunks.ts
import api from '../../services/api';
import { NewPostFormData, Post } from '../../utils/types';
import { fetchPosts, createPost } from './postsActions';

// Define the thunk to fetch posts data
export const fetchPostsData = () => async (dispatch: any) => {
  try {
    // Perform the API call here to fetch posts data from the backend
    // For example, using axios or fetch to get posts data from the server
    const response = await api.get('/posts'); // Adjust the API endpoint as needed
    const postsData = await response.data;

    // Dispatch the action to set the posts data
    dispatch(fetchPosts(postsData));
  } catch (error) {
    // Handle any errors that occur during the API call or data fetching
    console.error('Error fetching posts data:', error);
  }
};

// Define the thunk to create a new post
export const createNewPost = (postData: NewPostFormData) => async (dispatch: any) => {
  try {
    // Perform the API call here to create a new post on the backend
    // For example, using axios or fetch to post the post data to the server
    const response = await api.post('/posts', postData);
    // Dispatch the action to add the new post to the state
    const newPost: Post = response.data
    dispatch(createPost(newPost));
  } catch (error) {
    // Handle any errors that occur during the API call or data posting
    console.error('Error creating post:', error);
  }
};
