import api from '../../services/api';
import { AppDispatch } from '../../store';
import { NewUserProfileForm, UserProfile } from '../../utils/types';
import { setError, setUserProfile } from './userSlice';
import axios, {AxiosResponse} from 'axios';

// Define the thunk to fetch posts data
export const getUserProfile = () => async (dispatch: AppDispatch) => {
  try {
    // Perform the API call here to fetch posts data from the backend
    // For example, using axios or fetch to get posts data from the server
    const response: AxiosResponse = await api.get('/user/profile'); // Adjust the API endpoint as needed
    const userProfile: UserProfile = await response.data;

    // Dispatch the action to set the posts data
    dispatch(setUserProfile(userProfile));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(setError(error.message))

      console.error('Error fetching user profile data:', error.message);
      console.log(error.status)
      console.error(error.response);
      // Do something with this error...
    } else {
      console.error(error);
    }
    // Handle any errors that occur during the API call or data fetching

  }
};

// Define the thunk to create a new post
export const updateUserProfile = (newUserProfile: NewUserProfileForm) => async (dispatch: AppDispatch) => {
  try {
    // Perform the API call here to create a new post on the backend
    // For example, using axios or fetch to post the post data to the server
    const response: AxiosResponse = await api.post('/user/profile/update', newUserProfile);
    // Dispatch the action to add the new post to the state
    const user: UserProfile = response.data
    dispatch(setUserProfile(user));
  } catch (error) {
    // Handle any errors that occur during the API call or data posting
    if (axios.isAxiosError(error)) {
      dispatch(setError(error.message))

      console.error('Error while update user profile data:', error.message);
      console.log(error.status)
      console.error(error.response);
      // Do something with this error...
    } else {
      console.error(error);
    }
  }
};
