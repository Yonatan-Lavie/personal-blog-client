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

export interface JwtToken {
  token: string;
  expirationDate: Date;
};

export interface Comment {
  id: string;
  text: string;
  likes: number;
  // Add other properties for a comment if needed
}

 // Define the type for a single post
 export interface Post {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  // Add other properties for a post if needed
}
