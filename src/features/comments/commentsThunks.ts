// commentsThunks.ts

import { Comment } from '../../utils/types';
import { fetchComments, postComment } from './commentsActions';

// Define the thunk to fetch comments data
export const fetchCommentsData = () => async (dispatch: any) => {
  try {
    // Perform the API call here to fetch comments data from the backend
    // For example, using axios or fetch to get comments data from the server
    const response = await fetch('/api/comments'); // Adjust the API endpoint as needed
    const commentsData = await response.json();

    // Dispatch the action to set the comments data
    dispatch(fetchComments(commentsData));
  } catch (error) {
    // Handle any errors that occur during the API call or data fetching
    console.error('Error fetching comments data:', error);
  }
};

// Define the thunk to post a new comment
export const postNewComment = (commentData: Comment) => async (dispatch: any) => {
  try {
    // Perform the API call here to post the new comment data to the backend
    // For example, using axios or fetch to post the comment data to the server
    await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    });

    // Dispatch the action to add the new comment to the state
    dispatch(postComment(commentData));
  } catch (error) {
    // Handle any errors that occur during the API call or data posting
    console.error('Error posting comment:', error);
  }
};
