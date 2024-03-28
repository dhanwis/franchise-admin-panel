import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "Services/baseUrl";
import { isAuthenticated } from "utils/auth";

// Create AuthContext
export const AuthContext = createContext();

// Create AuthProvider component
export const AuthProvider = ({ children }) => {
  // State variables
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Function to handle login
  const login = async (franchiseName, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/franchise/auth/login`, {
        franchiseName,
        password,
      });

      if (response.status === 200) {
        const { token, franchiseData } = response.data;

        // Save token and user data to localStorage
        localStorage.setItem("authToken", token);
        localStorage.setItem("franchiseData", JSON.stringify(franchiseData));

        // Update state with franchise data and token
        setUser(franchiseData);
        setToken(token);
        setLoggedIn(true);
      } else {
        // If response status is not 200, handle the error
        throw new Error(response.data.message);
      }
    } catch (error) {
      // Handle errors thrown during login
      console.error("Error logging in:", error);
      throw error; // Rethrow the error to be caught by the caller
    }
  };

  // Function to handle logout
  const logout = async () => {
    // Check if user is available
    if (user) {
      // Call the logout endpoint on the backend
      let response = await axios.post(`${BASE_URL}/franchise/auth/logout`, {
        userId: user._id,
      });

      if (response.status === 200) {
        // Remove authentication token and user-related data from local storage
        console.log(response.data.message);
        localStorage.removeItem("authToken");
        localStorage.removeItem("franchiseData");

        // Clear user state
        setUser(null);
        setToken(null);
        setLoggedIn(false);
      } else {
        console.error("getting error:", response.data.message);
      }
    }
  };

  // useEffect to retrieve user data from localStorage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUserData = localStorage.getItem("franchiseData");

    if (storedToken && storedUserData) {
      setToken(storedToken);
      setUser(JSON.parse(storedUserData));
      setLoggedIn(true);
    }
  }, []);

  // Context value
  const contextValue = {
    loggedIn,
    user,
    token,
    login,
    logout,
  };

  // Provide the context value to children
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
