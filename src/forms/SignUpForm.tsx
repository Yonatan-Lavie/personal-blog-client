// forms/SignUpForm.tsx

import React, { useState } from 'react';
import { signUp } from '../features/user/userActions';
import { SignUpFormData } from '../utils/types'; // Import the SignUpFormData type
import { isFieldEmpty, isValidEmail, isValidPasswordLength, isValidUsername } from '../utils/validation/validationUtils';


const SignUpForm: React.FC = () => {

  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form data before submitting
    if (isFieldEmpty(formData.firstName) || isFieldEmpty(formData.lastName)) {
      // Handle empty first name or last name
      console.error('First name and last name are required.');
      return;
    }
  
    if (!isValidEmail(formData.email)) {
      // Handle invalid email format
      console.error('Invalid email format.');
      return;
    }
  
    if (!isValidPasswordLength(formData.password)) {
      // Handle invalid password length
      console.error('Password must be at least 6 characters long.');
      return;
    }
  
  try {
    // Call the signUpUser function from authUtils to perform sign-up API request
    signUp(formData);
    // Redirect to the home page or any other page after successful sign-up
    // history.push('/');
  } catch (error) {
    // Handle sign-up errors
    console.error('Error signing up:', error);
  }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
