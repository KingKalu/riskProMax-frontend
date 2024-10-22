import axios from "api/axios";
import AuthContext from "contexts/AuthContext";
import React, { useEffect, useState } from "react";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [waitIsAuthCheck, setWaitIsAuthCheck] = useState(true);

  const login = async (formData) => {
    try {
      const response = await axios.post("/users/login", formData);
      const data = await response.data;

      if (data) {
        setUser(data.user);
        setIsAuthenticated(true);
        localStorage.setItem("rpm-jwt-token", data.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {};

  useEffect(() => {
    try {
      setWaitIsAuthCheck(true);
      const token = localStorage.getItem("rpm-jwt-token");
      console.log({ token });
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setIsAuthenticated(true);
        setWaitIsAuthCheck(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setWaitIsAuthCheck(false);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{ login, logout, user, isAuthenticated, waitIsAuthCheck }}
    >
      {children}
    </AuthContext.Provider>
  );
}
