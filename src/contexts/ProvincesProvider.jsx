import React, { createContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";
import axios from "axios";

// Tạo context
export const ContextProvinces = createContext();

// Provider
export const ProvincesProvider = ({ children }) => {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
      getProvinces();
  }, []);

  const getProvinces = async () => {
      const reponsive = await axios.get("https://provinces.open-api.vn/api/v2/p/");
      setProvinces(reponsive.data);
  }
  
  return (
    <ContextProvinces.Provider value={provinces}>
      {children}
    </ContextProvinces.Provider>
  );
};