// commentsActions.ts

import { Comment } from '../../utils/types';
import { setComments, addComment } from './commentsSlice';

// Define the action creator to set the comments
export const fetchComments = (commentsData: Comment[]) => (dispatch: any) => {
  // Perform API call or any asynchronous operation here to fetch comments data
  // For example, using axios or fetch to get comments data from the backend
  // Then dispatch the setComments action with the received comments data
  dispatch(setComments(commentsData));
};

// Define the action creator to add a new comment
export const postComment = (commentData: Comment) => (dispatch: any) => {
  // Perform API call or any asynchronous operation here to post a new comment
  // For example, using axios or fetch to post the comment data to the backend
  // Then dispatch the addComment action with the new comment data
  dispatch(addComment(commentData));
};
