// userSlice.ts

import { createSlice, createAsyncThunk, PayloadAction, isRejectedWithValue } from '@reduxjs/toolkit';
import api from '../../services/api';
import { isAxiosError } from 'axios';
import { NewUserProfileForm, UserProfile } from '../../utils/types';

interface UserState {
  user: UserProfile | null;
  error: string | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: UserState = {
  user: null,
  error: null,
  loading: 'idle',
};

export const signUp = createAsyncThunk('user/signUp', async (userData: UserProfile, { rejectWithValue }) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    if (isAxiosError(error)) {
      return rejectWithValue(`error.status: ${error.status}, error.response: ${error.response}`);
    }
    return rejectWithValue('Failed to update user');
  }
});

export const signIn = createAsyncThunk('user/signIn', async (credentials: { email: string; password: string; }, { rejectWithValue }) => {
  try {
    const response = await api.post('/auth/signin', credentials);
    return response.data;
  } catch (error) {
    console.error('Error signing in:', error);
    if (isAxiosError(error)) {
      return rejectWithValue(`error.status: ${error.status}, error.response: ${error.response}`);
    }

    return rejectWithValue('Failed to sign in');
  }
});

export const signOut = createAsyncThunk('user/signOut', async (_, { rejectWithValue }) => {
  try {
    await api.post('/auth/signout');
    return null;  // Clear the user data upon successful signout
  } catch (error) {
    console.error('Error signing out:', error);
    if (isAxiosError(error)) {
      return rejectWithValue(`error.status: ${error.status}, error.response: ${error.response}`);
    }
    return rejectWithValue('Failed to sign out');
  }
});

export const updateUser = createAsyncThunk('user/updateUser', async (userData: NewUserProfileForm, { rejectWithValue }) => {
  try {
    const response = await api.post('/user/profile/update', userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    if (isAxiosError(error)) {
        return rejectWithValue(`error.status: ${error.status}, error.response: ${error.response}`);
    }
    return rejectWithValue('Failed to update user');
  }
});

export const getUser = createAsyncThunk('user/getUser', async (_,{ rejectWithValue }) => {
  try {
    const response = await api.get('/user/auth');
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    if (isAxiosError(error)) {
      return rejectWithValue(`error.status: ${error.status}, error.response: ${error.response}`);
    }

    return rejectWithValue('Failed to fetch user');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(signUp.fulfilled, (state, action: PayloadAction<UserProfile>) => {
        state.loading = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = 'failed';
        if (isRejectedWithValue(action.payload)) {
          state.error = action.payload as unknown as string;
        } else {
          state.error = 'An error occurred';
        }
      })
      .addCase(signIn.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<UserProfile>) => {
        state.loading = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = 'failed';
        if (isRejectedWithValue(action.payload)) {
          state.error = action.payload as unknown as string;
        } else {
          state.error = 'An error occurred';
        }
      })
      .addCase(signOut.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(signOut.fulfilled, (state) => {
        state.loading = 'succeeded';
        state.user = null; // Clear user data on sign out
        state.error = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.loading = 'failed';
        if (isRejectedWithValue(action.payload)) {
          state.error = action.payload as unknown as string;
        } else {
          state.error = 'An error occurred';
        }
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<UserProfile>) => {
        state.loading = 'succeeded';
        state.user = { ...state.user, ...action.payload }; // Merge the changes with the existing user data
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = 'failed';
        if (isRejectedWithValue(action.payload)) {
          state.error = action.payload as unknown as string;
        } else {
          state.error = 'An error occurred';
        }
      })
      .addCase(getUser.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<UserProfile>) => {
        state.loading = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = 'failed';
        if (isRejectedWithValue(action.payload)) {
          state.error = action.payload as unknown as string;
        } else {
          state.error = 'An error occurred';
        }
      })
  },
});

export default userSlice.reducer;

// Export selectors
export const selectUser = (state: { user: UserState }) => state.user.user;
export const selectUserLoading = (state: { user: UserState }) => state.user.loading;
export const selectUserError = (state: { user: UserState }) => state.user.error;

