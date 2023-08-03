export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  // Add more user-related fields as needed.
}

// Type definition for form data used in sign-up
export interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Type definition for form data used in sign-in
export interface SignInFormData {
  email: string;
  password: string;
}
