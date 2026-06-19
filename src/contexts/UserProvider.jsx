import React, { createContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

// Tạo User Context
export const UserContext = createContext([]);

// User Provider
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Lắng nghe realtime từ collection users
    const unsubscribe = fetchDocumentsRealtime("users", (data) => {
      setUsers(data);
    });

    // Hủy lắng nghe khi component bị unmount
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return (
    <UserContext.Provider value={users}>
      {children}
    </UserContext.Provider>
  );
};