// userSlice.ts

import { 
  createSlice, 
  PayloadAction, 
  createSelector 
} from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { User, UserProfile } from '../../utils/types';


// Define the type for the user state
interface UserState {
  user: User | null; // Replace "any" with the actual type for the user data
  error: string | null;
  loading: boolean;
  userProfile: UserProfile| null;
}

// Define the initial state
const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  userProfile: {
    firstName: 'yonatan',
    lastName: 'lavie',
    email: 'yonatan.lavie89@gmail.com',
    username: 'yonatan89',
    photo: 'no-photo',
    status: 'verified',
    role: 'admin',
    createdAt: '2023-08-04T09:58:38.891Z',
  }
};

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    signOutUserSuccess: (state) => {
      state.user = null;
      state.error = null;
    },
    signUpUserSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      // You can update other state properties if needed based on the sign-up success action.
    },
    signInUserSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      // You can update other state properties if needed based on the sign-up success action.
    },
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
      state.loading = false;
      // You can update other state properties if needed based on the sign-up success action.
    },
  },
});

// Export actions from the user slice
export const { 
  setUser, 
  setError, 
  clearError, 
  signOutUserSuccess, 
  signUpUserSuccess, 
  signInUserSuccess, 
  setUserProfile, 
  setLoading
 } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;


export const selectUserProfile = createSelector(
  (state: RootState) => state.user,
  (user: UserState) => user.userProfile
)

// Export a selector to access user state in components
export const selectUser = (state: RootState) => state.user.user;
// export const selectUserProfile = (state: RootState) => state.user.userProfile;
export const selectError = (state: RootState) => state.user.error;
