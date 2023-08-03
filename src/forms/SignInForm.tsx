// forms/SignInForm.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInUser } from '../features/user/userThunks';
import { SignInFormData } from '../utils/types'; // Import the SignInFormData type


const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<SignInFormData>({
    email: '',
    password: '',
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
    // Dispatch the sign-in action
    dispatch(signInUser(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
