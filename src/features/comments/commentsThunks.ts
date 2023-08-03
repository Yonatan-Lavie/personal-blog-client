// commentsThunks.ts

import api from '../../services/api';
import { Comment, NewCommentFormData } from '../../utils/types';
import { fetchComments, postComment } from './commentsActions';

// Define the thunk to fetch comments data
export const fetchCommentsData = () => async (dispatch: any) => {
  try {
    // Perform the API call here to fetch comments data from the backend
    // For example, using axios or fetch to get comments data from the server
    const response = await api.get('/comments'); // Adjust the API endpoint as needed
    const commentsData = await response.data;

    // Dispatch the action to set the comments data
    dispatch(fetchComments(commentsData));
  } catch (error) {
    // Handle any errors that occur during the API call or data fetching
    console.error('Error fetching comments data:', error);
  }
};

// Define the thunk to post a new comment
export const postNewComment = (commentData: NewCommentFormData, postId: string) => async (dispatch: any) => {
  try {
    // Perform the API call here to post the new comment data to the backend
    // For example, using axios or fetch to post the comment data to the server
    const response = await api.post('/comments', commentData);
    const newComment: Comment = response.data
    // Dispatch the action to add the new comment to the state
    dispatch(postComment(newComment));
  } catch (error) {
    // Handle any errors that occur during the API call or data posting
    console.error('Error posting comment:', error);
  }
};
