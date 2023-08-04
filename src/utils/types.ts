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
  content: string;
  imageUrl: string;
  excerpt: string;
  // Add other properties for a post if needed
}

export interface NewCommentFormData {
  text: string;
}

export interface NewPostFormData {
  title: string;
  content: string;
  imageUrl?: string;
}


export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  photo: string;
  status: string;
  role: string;
  createdAt: string; // If you are using a Date object instead of a string, you can replace "string" with "Date".
}

export interface NewUserProfileForm {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  photo: string | undefined;
}