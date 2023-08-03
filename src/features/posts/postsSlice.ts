// postsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Post } from '../../utils/types';


// Define the type for the posts state
interface PostsState {
  posts: Post[];
  // Add other properties for post-related state if needed
}

// Define the initial state
const initialState: PostsState = {
  posts: [],
  // Initialize other properties here if needed
};

// Create the posts slice
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    // Define other reducers here if needed
  },
});

// Export actions from the posts slice
export const { setPosts, addPost } = postsSlice.actions;

// Export the reducer
export default postsSlice.reducer;

// Export a selector to access posts state in components
export const selectPosts = (state: RootState) => state.posts.posts;
