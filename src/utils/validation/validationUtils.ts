// validationUtils.ts

// Function to check if a field is empty
export const isFieldEmpty = (value: string): boolean => {
  return value.trim() === '';
};

// Function to validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Function to validate password length
export const isValidPasswordLength = (password: string): boolean => {
  return password.length >= 6;
};

// Function to validate username format
export const isValidUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9_]{4,15}$/;
  return usernameRegex.test(username);
};

// Check if the given URL is a valid image URL
export function isValidImageURL(url: string): boolean {
  const imageFormats = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'];
  const pattern = new RegExp(`.(${imageFormats.join('|')})$`, 'i');
  return pattern.test(url);
}