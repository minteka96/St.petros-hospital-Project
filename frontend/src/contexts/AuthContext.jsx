import React, { useState, useEffect, useContext } from "react";
// Import auth utilities
import userAuthHeader from "../util/auth";

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
  const [trainee, setTrainee] = useState(null);
  const [privileges, setPrivileges] = useState([]); // New state for privileges
  const [loading, setLoading] = useState(true); // Track loading state

  // console.log("trainee", trainee);
  const value = {
    isLogged,
    isAdmin,
    user,
    privileges,
    setIsLogged,
    setIsAdmin,
    trainee,
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const traineeToken = await userAuthHeader();
        const token = await userAuthHeader();
        if (token) {
          // Decode the token payload
          const decodedToken = JSON.parse(
            atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))
          );
          const {
            role,
            username,
            email,
            privileges: userPrivileges,
          } = decodedToken;

          // Update authentication state
          setIsLogged(true);
          setUser({ username, role, email, token });
          setIsAdmin(role === "admin"); // Check if the role is "admin"

          // Update privileges
          setPrivileges(userPrivileges || []); // Default to an empty array if privileges are not provided
        }
        if (traineeToken) {
          // console.log("traineeToken", traineeToken);
          const decodedTraineeToken = JSON.parse(
            atob(
              traineeToken.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")
            )
          );
          const { id, email } = decodedTraineeToken;
          // console.log("id, email", id, email);
          setTrainee({ id, email, traineeToken });
        }
      } catch (error) {
        console.error("Error during authentication initialization:", error);
        setIsLogged(false); // Reset states on error
        setIsAdmin(false);
        setUser(null);
        setPrivileges([]);
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
