import React, { createContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

// Tạo context
export const ContextFeatures = createContext();

// Provider
export const FeaturesProvider = ({ children }) => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    // realtime từ Firestore (collection: features)
    const unsubscribe = fetchDocumentsRealtime("features", (data) => {
      setFeatures(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ContextFeatures.Provider value={features}>
      {children}
    </ContextFeatures.Provider>
  );
};