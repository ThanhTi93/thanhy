import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Tạo context
export const ContextWards = createContext();

// Provider
export const WardsProvider = ({ children }) => {
  const [wards, setWards] = useState([]);

  useEffect(() => {   
      getWards();
  }, []);

  const getWards = async () => {
    try {
      const response = await axios.get("https://provinces.open-api.vn/api/v2/w/");

      // lấy wards từ district
      setWards(response.data || []);
    } catch (error) {
      console.log("Error fetch wards:", error);
    }
  };
  return (
    <ContextWards.Provider value={wards}>
      {children}
    </ContextWards.Provider>
  );
};