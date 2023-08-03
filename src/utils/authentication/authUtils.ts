// utils/authentication/authUtils.ts

import { SignInFormData, SignUpFormData } from "../types";

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
    const responseData = await response.json();
    console.log('Sign-up successful:', responseData);
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
    const responseData = await response.json();
    console.log('Sign-in successful:', responseData);
    // Store the JWT token in local storage or cookies for authentication
    localStorage.setItem('jwtToken', responseData.jwtToken);
  } catch (error) {
    console.error('Sign-in error:', error);
    throw error;
  }
};
