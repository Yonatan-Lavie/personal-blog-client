// userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { User } from '../../utils/types';


// Define the type for the user state
interface UserState {
  user: User | null; // Replace "any" with the actual type for the user data
  error: string | null;
}

// Define the initial state
const initialState: UserState = {
  user: null,
  error: null,
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
  },
});

// Export actions from the user slice
export const { setUser, setError, clearError, signOutUserSuccess, signUpUserSuccess, signInUserSuccess } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;

// Export a selector to access user state in components
export const selectUser = (state: RootState) => state.user.user;
export const selectError = (state: RootState) => state.user.error;
