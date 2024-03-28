// utils/auth.js
export const isAuthenticated = () => {
  // Check if the user is authenticated (e.g., if there is a valid authentication token)
  // Replace this with your actual authentication logic
  return localStorage.getItem("authToken") !== null; // Example: Check if there is an auth token in local storage
};
