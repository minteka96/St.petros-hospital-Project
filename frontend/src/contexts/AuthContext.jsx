import React, { createContext, useContext, useState, useEffect } from "react";
import getAuth from "../util/auth"; // Adjust the path to `auth.js`

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [employee, setEmployee] = useState(null);

  const value = { isLogged, isAdmin, setIsAdmin, setIsLogged, employee };

  useEffect(() => {
    const fetchAuth = async () => {
      const loggedInEmployee = await getAuth();
      if (loggedInEmployee?.employee_token) {
        setIsLogged(true);
        if (
          loggedInEmployee.employee_role === 3 ||
          loggedInEmployee.employee_role === 2
        ) {
          setIsAdmin(true);
        }
        setEmployee(loggedInEmployee);
      }
    };

    fetchAuth();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
