import React, { createContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

// Tạo context
export const ContextCateTypes = createContext();

// Provider
export const CateTypesProvider = ({ children }) => {
  const [cateTypes, setCateTypes] = useState([]);

  useEffect(() => {
    // Lắng nghe realtime từ Firestore (collection: cate_types)
    const unsubscribe = fetchDocumentsRealtime("cate_types", (data) => {
      setCateTypes(data);
    });

    // cleanup khi unmount
    return () => unsubscribe();
  }, []);

  return (
    <ContextCateTypes.Provider value={cateTypes}>
      {children}
    </ContextCateTypes.Provider>
  );
};