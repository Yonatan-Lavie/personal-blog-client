// utils/authentication/authUtils.ts

import { SignInFormData, SignUpFormData, User, JwtToken } from "../types";

// Utility function to handle sign-up
export const signUpUser = async (formData: SignUpFormData) => {
  try {
    // Perform API request to sign up the user
    // Replace with your actual API endpoint and logic
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Sign-up failed');
    }

    // Sign-up successful, do something with the response if needed
    const responseData: User = await response.json();
    console.log('Sign-up successful:', responseData);
    return responseData
  } catch (error) {
    console.error('Sign-up error:', error);
    throw error;
  }
};

// Utility function to handle sign-in
export const signInUser = async (formData: SignInFormData) => {
  try {
    // Perform API request to sign in the user
    // Replace with your actual API endpoint and logic
    const response = await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Sign-in failed');
    }

    // Sign-in successful, do something with the response if needed
    const { user, jwtToken }: { user: User; jwtToken: JwtToken }  = await response.json();
    console.log('Sign-in successful:', user);
    // Store the JWT token in local storage or cookies for authentication
    localStorage.setItem('jwtToken', JSON.stringify(jwtToken));
    return user
  } catch (error) {
    console.error('Sign-in error:', error);
    throw error;
  }
};

// Utility function to handle sign-out
export const signOutUser = async (userId: string) => {
  try {
    // Perform an API request to sign out the user
    const response = await fetch(`/api/signout/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Sign-out failed');
    }

    // Sign-out successful, clear the JWT token from local storage or cookies
    localStorage.removeItem('jwtToken');
    
    console.log('Sign-out successful');
  } catch (error) {
    console.error('Sign-out error:', error);
    throw error;
  }
};
