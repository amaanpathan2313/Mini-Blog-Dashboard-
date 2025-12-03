 import React, { useState, createContext, useEffect } from "react";

export const userposts = createContext();

export function ContextData({ children }) {
  const [data, setData] = useState({
    loading: false,
    error: false,
    apiData: null,
  });

  const [user, setUser] = useState({
    loading: false,
    error: false,
    userData: null,
  });

  const [users, setUsers] = useState([]); 

  async function fetchData() {
    setData({ loading: true, error: false, apiData: null });

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await response.json();

      setData({ loading: false, error: false, apiData: result });
    } catch (err) {
      console.log("Error:", err.message);
      setData({ loading: false, error: true, apiData: null });
    }
  }

  async function fetchUser() {
    setUser({ loading: true, error: false, userData: null });

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await response.json();

       setUser({ loading: false, error: false, userData: result });

      // Extract only names
      const userNames = result.map((u) => u.name);
      setUsers(userNames);

      console.log("User Names:", userNames);
    } catch (err) {
      console.log("Error:", err.message);
      setUser({ loading: false, error: true, userData: null });
    }
  }



  return (
    <userposts.Provider
      value={{
        data,
        fetchData,
        user,
        users,
        fetchUser,
      }}
    >
      {children}
    </userposts.Provider>
  );
}
