// userActions.ts

import { SignUpFormData, SignInFormData, User, NewUserProfileForm } from '../../utils/types';
import { signUpUser, signInUser, signOutUser } from '../../utils/authentication/authUtils';
import { setError, signOutUserSuccess, signUpUserSuccess, signInUserSuccess, setLoading } from './userSlice';
import { AppDispatch } from '../../store';
import { getUserProfile, updateUserProfile } from './userThunks';

// Define and export the asynchronous thunks for sign-up, sign-in, and sign-out
export const signUp = (formData: SignUpFormData) => async (dispatch: AppDispatch) => {
  try {
    const newUser = await signUpUser(formData);
    dispatch(signUpUserSuccess(newUser));
  } catch (error: any) {
    dispatch(setError(error.message || 'Sign-up failed'));
  }
};

export const signIn = (formData: SignInFormData) => async (dispatch: AppDispatch) => {
  try {
    const user = await signInUser(formData);
    dispatch(signInUserSuccess(user));
  } catch (error: any) {
    dispatch(setError(error.message || 'Sign-in failed'));
  }
};

export const signOut = (user: User) => async (dispatch: AppDispatch) => {
  try {
    await signOutUser(user.id);
    dispatch(signOutUserSuccess());
  } catch (error: any) {
    dispatch(setError(error.message || 'Sign-out failed'));
  }
};

export const updateUser = (userProfile: NewUserProfileForm) => async (dispatch: AppDispatch) => {
  try {
    dispatch(updateUserProfile(userProfile));
  } catch (error: any) {
    dispatch(setError(error.message || 'Sign-out failed'));
  }
};
export const getUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true))
    dispatch(getUserProfile());
    dispatch(setLoading(false))
  } catch (error: any) {
    dispatch(setError(error.message || 'Sign-out failed'));
  }
};
