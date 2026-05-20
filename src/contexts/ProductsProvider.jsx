import React, { createContext, useEffect, useState } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

// Tạo context
export const ContextProducts = createContext();

// Provider
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Lắng nghe realtime từ Firestore (collection: products)
    const unsubscribe = fetchDocumentsRealtime("products", (data) => {
      setProducts(data);
    });

    // cleanup
    return () => unsubscribe();
  }, []);

  return (
    <ContextProducts.Provider value={products}>
      {children}
    </ContextProducts.Provider>
  );
};