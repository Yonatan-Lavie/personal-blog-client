// commentsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Comment } from '../../utils/types';

// Define the type for a single comment


// Define the type for the comments state
interface CommentsState {
  comments: Comment[];
  // Add other properties for comment-related state if needed
}

// Define the initial state
const initialState: CommentsState = {
  comments: [],
  // Initialize other properties here if needed
};

// Create the comments slice
const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
    // Define other reducers here if needed
  },
});

// Export actions from the comments slice
export const { setComments, addComment } = commentsSlice.actions;

// Export the reducer
export default commentsSlice.reducer;

// Export a selector to access comments state in components
export const selectComments = (state: RootState) => state.comments.comments;
