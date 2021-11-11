import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      await fetch("https://6186e9b4cd8530001765ac12.mockapi.io/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={products ? products : null}>
      {children}
    </ProductContext.Provider>
  );
};
