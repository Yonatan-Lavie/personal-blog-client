import axios from 'axios';

// Set the base URL for your API server
const baseURL = 'https://your-api-server.com/api'; // Replace with your API server URL

// Create an instance of Axios with the base URL
const api = axios.create({
  baseURL,
  timeout: 10000, // Set the timeout for API requests (in milliseconds)
});

// Add any headers or interceptors as needed
api.interceptors.request.use(
  (config) => {
    // Add any headers or authentication tokens here
    // For example, you can add a JWT token to the Authorization header
    // const token = getToken();
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Export the api instance
export default api;
