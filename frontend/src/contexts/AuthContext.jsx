/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from "react";
// Import auth utilities
import userAuthHeader from "../Util/auth.header";

// Create the AuthContext
const AuthContext = React.createContext();

// Hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  const value = { isLogged, isAdmin, user, setIsLogged, setIsAdmin };
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = await userAuthHeader();
        if (token) {
          // Decode the token payload
          const { role, username, email } = JSON.parse(
            atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))
          );

          // Update authentication state
          setIsLogged(true);
          setUser({ username, role, email, token });
          setIsAdmin(role === "admin"); // Check if the role is "admin"
        }
      } catch (error) {
        console.error("Error during authentication initialization:", error);
        setIsLogged(false); // Reset states on error
        setIsAdmin(false);
        setUser(null);
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    initializeAuth();
  }, []);

  // Avoid rendering children until loading is complete
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
