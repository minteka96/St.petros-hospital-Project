import React, { useState, useEffect, useContext } from "react";
import userAuthHeader, { decodeTokenPayload } from "../util/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [trainee, setTrainee] = useState(null);
  const [privileges, setPrivileges] = useState([]);
  const [loading, setLoading] = useState(true);

  const value = {
    isLogged,
    isAdmin,
    user,
    trainee,
    privileges,
    setIsLogged,
    setIsAdmin,
  };

  const checkTraineeExists = async (id) => {
    try {
      const response = await fetch(`/api/trainees-info/${id}`);
      if (response.status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error checking trainee existence:", error);
      return false;
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const adminToken = await userAuthHeader("admin");
        const traineeToken = await userAuthHeader("trainee");

        if (adminToken) {
          const decodedAdminToken = decodeTokenPayload(adminToken);
          const { role, username, email, privileges } = decodedAdminToken;

          setIsLogged(true);
          setUser({ username, role, email, token: adminToken,privileges });
          setIsAdmin(role === "admin");
          setPrivileges(privileges || []);
        }

        if (traineeToken) {
          const decodedTraineeToken = decodeTokenPayload(traineeToken);
          const { id, email } = decodedTraineeToken;

          const traineeExists = await checkTraineeExists(id);
          // if (!traineeExists) {
          //   // Reset state if trainee does not exist
          //   setIsLogged(false);
          //   setIsAdmin(false);
          //   setUser(null);
          //   // setTrainee(null);
          //   setPrivileges([]);
          //   return;
          // }

          setTrainee({ id, email, token: traineeToken });
        }
      } catch (error) {
        console.error("Error during authentication initialization:", error);
        setIsLogged(false);
        setIsAdmin(false);
        setUser(null);
        setTrainee(null);
        setPrivileges([]);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
